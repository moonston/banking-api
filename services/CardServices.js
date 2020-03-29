const {Card, Wallet} = require('../models');
const utils = require('../utils');
/**
 * Save the card
 * @returns {Promise<Model> | Domain | Promise<void> | any}
 * @param walletId
 * @param userId
 * @param companyId
 * @param currentBalance
 * @param cardNumber
 * @param expirationDate
 * @param cvv
 */
const save = async (walletId, userId, companyId, currentBalance, cardNumber, expirationDate, cvv) => {
    const wallet = await Wallet.findByPk(walletId);

    if(!wallet) {
        throw 'Wallet is not exits!';
    }

    return Card.create({
        walletId,
        currency: wallet.currency,
        currentBalance,
        cardNumber,
        expirationDate,
        cvv,
        userId,
        status: "active"
    });
};

/**
 * List cards by user id
 * @param userId
 * @returns {Promise<Model[]>}
 */
const list = async (userId) => {
    return Card.findAll({
        where: {
            userId,
        },
    });
};

/**
 * Get Card from DB with Wallet
 * @param cardId
 * @returns {Promise<{wallet: *, card: *}>}
 */
const getCardWithWallet = async (cardId) => {
    const card = await Card.findByPk(cardId, {
        include: [{
            model: Wallet
        }]
    });

    const wallet = card.Wallet;

    return {card, wallet};
};

/**
 * Load the amountToLoad to card currentBalance from wallet currentBalance
 * @param cardId
 * @param userId
 * @param amountToLoad
 * @returns {Promise<{card: *}>}
 */
const load = async (cardId, userId, amountToLoad) => {
    const {card, wallet} = await getCardWithWallet(cardId);

    if(card.userId !== userId) {
        throw 'wrong user';
    }

    if(wallet.currentBalance < amountToLoad) {
        throw 'not enough wallet balance';
    }

    let newWalletBalance = wallet.currentBalance - amountToLoad;
    let newCardBalance = card.currentBalance + amountToLoad;

    await card.update({ currentBalance: newCardBalance });
    await wallet.update({ currentBalance: newWalletBalance });

    return {card};
};

/**
 * Load the amountToLoad to waller currentBalance from card currentBalance
 * @param cardId
 * @param userId
 * @param amountToLoad
 * @returns {Promise<{card: *}>}
 */
const unload = async (cardId, userId, amountToLoad) => {
    const {card, wallet} = await getCardWithWallet(cardId);

    if(card.userId !== userId) {
        throw 'wrong user';
    }

    if(card.currentBalance < amountToLoad) {
        throw 'not enough card balance';
    }

    let newWalletBalance = wallet.currentBalance + amountToLoad;
    let newCardBalance = card.currentBalance - amountToLoad;

    await card.update({ currentBalance: newCardBalance });
    await wallet.update({ currentBalance: newWalletBalance });

    return {card};
};

const unblock = async (cardId) => {
    const {card} = await getCardWithWallet(cardId);
    await card.update({ status: "active" });
    return {card};
};

const block = async (cardId) => {
    const {card, wallet} = await getCardWithWallet(cardId);

    let newWalletBalance = wallet.currentBalance + card.currentBalance;

    await card.update({ currentBalance: 0, status: "blocked" });
    await wallet.update({ currentBalance: newWalletBalance });

    return {card};
};

module.exports = {
    save,
    load,
    unload,
    unblock,
    block,
    list
};
