const {Wallet} = require('../models');
const utils = require('../utils');
/**
 * Save the wallet
 * @returns {Promise<Model> | Domain | Promise<void> | any}
 * @param currency
 * @param currentBalance
 * @param companyId
 * @param isMaster
 */
const save = (currency, currentBalance, companyId, isMaster) => {
    if(!utils.currencies.includes(currency)) {
        throw 'Invalid currency';
    }

    return Wallet.create({
        currentBalance,
        currency,
        companyId,
        isMaster,
    });
};

/**
 * List wallets by company id
 * @param companyId
 * @returns {Promise<Model[]>}
 */
const list = (companyId) => {
    return Wallet.findAll({
        where: {
            companyId,
        },
    });
};

module.exports = {
    save,
    list
};
