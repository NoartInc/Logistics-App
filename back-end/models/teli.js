'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teli extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teli.init({
    fullName: DataTypes.STRING,
    location: 
    {
      type: DataTypes.ENUM('genteng','deck')
    },
    contact: DataTypes.STRING,
    status: 
    {
      type: DataTypes.ENUM('active','inactive')
    }
  }, {
    sequelize,
    modelName: 'Teli',
  });
  return Teli;
};