'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengangkutan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pengangkutan.init({
    pengangkutan: DataTypes.STRING,
    pic: DataTypes.STRING,
    contact: DataTypes.STRING,
    address: DataTypes.TEXT,
    status: 
    {
      type: DataTypes.ENUM('active','inactive')
    }
  }, {
    sequelize,
    modelName: 'Pengangkutan',
  });
  return Pengangkutan;
};