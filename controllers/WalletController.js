const baseController = require('./BaseController');
const WalletServices = require('../services/WalletServices');

module.exports.set = app => {
    app.post('/wallet/save', async (req, res) => {
        const {currency, currentBalance, companyId, isMaster} = req.body;

        try {
            const wallet = await WalletServices.save(currency, currentBalance, companyId, isMaster);
            baseController.success(res, {wallet:wallet});
        } catch (err) {
            console.log(err);
            baseController.error(res, err);
        }
    });

    app.get('/wallet/list/:companyId', async (req, res) => {
        const companyId = parseInt(req.params.companyId, 10);

        try {
            const wallets = await WalletServices.list(companyId);
            baseController.success(res, {count: wallets.length,  wallets : wallets});
        } catch (err) {
            console.log(err);
            baseController.error(res, err);
        }
    });
};
