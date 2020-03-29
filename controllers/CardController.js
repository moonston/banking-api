const baseController = require('./BaseController');
const CardServices = require('../services/CardServices');

module.exports.set = (app) => {
    app.post('/card/save', async (req, res) => {
        const {walletId, userId, companyId, currentBalance, cardNumber, expirationDate, cvv} = req.body;

        try {
            const card = await CardServices.save(walletId, userId, companyId, currentBalance, cardNumber,
                expirationDate, cvv);
            baseController.success(res, {card:card});
        } catch (err) {
            console.log(err);
            baseController.error(res, err);
        }
    });


    app.get('/card/list/:userId', async (req, res) => {
        const userId = parseInt(req.params.userId, 10);

        try {
            const cards = await CardServices.list(userId);
            baseController.success(res, {count: cards.length,  cards : cards});
        } catch (err) {
            console.log(err);
            baseController.error(res, err);
        }
    });

    app.post('/card/load/:cardId', async (req, res) => {
        const cardId = parseInt(req.params.cardId, 10);

        const {amount, userId} = req.body;
        const amountToLoad = parseFloat(amount);

        try {
            const {card} = await CardServices.load(cardId, userId, amountToLoad);
            baseController.success(res, {card : card});
        } catch (err) {
            console.log(err);
            baseController.error(res, err);
        }
    });

    app.post('/card/unload/:cardId', async (req, res) => {
        const cardId = parseInt(req.params.cardId, 10);

        const {amount, userId} = req.body;
        const amountToLoad = parseFloat(amount);

        try {
            const {card} = await CardServices.unload(cardId, userId, amountToLoad);
            baseController.success(res, { card : card});
        } catch (err) {
            console.log(err);
            baseController.error(res, err);
        }
    });

    app.post('/card/block/:cardId', async (req, res) => {
        const cardId = parseInt(req.params.cardId, 10);

        try {
            const {card} = await CardServices.block(cardId);
            baseController.success(res, { card : card});
        } catch (err) {
            console.log(err);
            baseController.error(res, err);
        }
    });

    app.post('/card/unblock/:cardId', async (req, res) => {
        const cardId = parseInt(req.params.cardId, 10);

        try {
            const {card} = await CardServices.unblock(cardId);
            baseController.success(res, { card : card});
        } catch (err) {
            console.log(err);
            baseController.error(res, err);
        }
    });
};