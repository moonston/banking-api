module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    currentBalance: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
    isMaster: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Wallet.associate = function(models) {
    Wallet.hasMany(models.Card, {
      as: 'cards',
      foreignKey: 'walletId',
    });
  };
  return Wallet;
};