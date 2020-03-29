// Load all controllers
const controllers = ["WalletController", "CardController", "TransferController"];

module.exports.set = (app) =>  {
    console.log("Load All Controllers");

    controllers.forEach(controller => {
        console.log("Load Controller : " + controller);

        const cont = require('./' + controller);
        cont.set(app);
    });
};