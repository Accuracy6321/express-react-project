module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define('Purchase', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stripePaymentIntentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Purchase;
};
