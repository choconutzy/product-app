'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.Product, {through: "user_product", foreignKey: "product_id"})
    }
  }
  user.init({
    name: DataTypes.STRING,
    tel_num: DataTypes.INTEGER,
    referal: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    boulevard: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};