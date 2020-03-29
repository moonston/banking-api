module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    walletId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Wallets',
        referencesKey: 'id',
      },
    },
    currency: DataTypes.STRING,
    currentBalance: DataTypes.FLOAT,
    cardNumber: DataTypes.STRING,
    expirationDate: DataTypes.DATE,
    cvv: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'blocked']
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Card.associate = function(models) {
    Card.belongsTo(models.Wallet, {
      foreignKey: 'walletId',
    });
  };
  return Card;
};