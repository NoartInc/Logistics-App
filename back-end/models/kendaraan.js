'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kendaraan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kendaraan.init({
    kendaraan: DataTypes.STRING,
    roda:
    {
      type: DataTypes.ENUM('roda-4','roda-6')
    },
    merk: DataTypes.STRING,
    status: 
    {
      type: DataTypes.ENUM('active','inactive')
    }
  }, {
    sequelize,
    modelName: 'Kendaraan',
  });
  return Kendaraan;
};