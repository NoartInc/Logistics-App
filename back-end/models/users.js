'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    fullName: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    role:
    {
      type: DataTypes.ENUM('administrator','driver','logistics','teli','CBO','sales','manager', 'telemarketing'),
    }, 
    jabatan: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    status:
    {
      type: DataTypes.ENUM('active','inactive')
    }, 
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};