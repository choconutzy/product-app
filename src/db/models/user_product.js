'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Product.belongsTo(models.Product, {foreignKey: "product_id"})
      User_Product.belongsTo(models.user, {foreignKey: "product_id"})
    }
  }
  User_Product.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'user_products',
    modelName: 'User_Product',
    underscored: true,
  });
  return User_Product;
};