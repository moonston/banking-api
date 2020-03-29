module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define('Transfer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amountTransferred: DataTypes.FLOAT,
    originCurrency: DataTypes.STRING,
    targetCurrency: DataTypes.STRING,
    conversionFee: DataTypes.FLOAT,
    originEntityId: DataTypes.INTEGER,
    originEntityType: {
      type: DataTypes.ENUM,
      values: ['card', 'wallet']
    },
    targetEntityId: DataTypes.INTEGER,
    targetEntityType: {
      type: DataTypes.ENUM,
      values: ['card', 'wallet']
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Transfer.associate = function(models) {
    // associations can be defined here
  };
  return Transfer;
};