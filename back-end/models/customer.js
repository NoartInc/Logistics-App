'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    customer: DataTypes.STRING,
    pic: DataTypes.STRING,
    contact: DataTypes.STRING,
    address: DataTypes.TEXT,
    sales: DataTypes.STRING,
    status: 
    {
      type: DataTypes.ENUM('active','inactive')
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};