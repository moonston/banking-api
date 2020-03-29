'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      walletId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Wallets',
          referencesKey: 'id',
        }
      },
      currency: {
        type: Sequelize.STRING
      },
      currentBalance: {
        type: Sequelize.FLOAT
      },
      cardNumber: {
        type: Sequelize.STRING
      },
      expirationDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cvv: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM,
        values: ['active', 'blocked']
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
    return queryInterface.dropTable('Cards');
  }
};
