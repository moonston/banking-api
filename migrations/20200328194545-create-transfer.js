'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transfers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amountTransferred: {
        type: Sequelize.FLOAT
      },
      originCurrency: {
        type: Sequelize.STRING
      },
      targetCurrency: {
        type: Sequelize.STRING
      },
      conversionFee: {
        type: Sequelize.FLOAT
      },
      originEntityId: {
        type: Sequelize.INTEGER
      },
      originEntityType: {
        type: Sequelize.ENUM,
        values: ['card', 'wallet']
      },
      targetEntityId: {
        type: Sequelize.INTEGER
      },
      targetEntityType: {
        type: Sequelize.ENUM,
        values: ['card', 'wallet']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transfers');
  }
};
