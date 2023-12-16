'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grading extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Grading.init({
    gradeName: DataTypes.STRING,
    gradeValue: DataTypes.DOUBLE,
    gradePoin: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Grading',
  });
  return Grading;
};