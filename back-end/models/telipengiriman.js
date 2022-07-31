'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeliPengiriman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.TeliPengiriman.belongsTo(models.Teli, {
        as: "teliPerson",
        foreignKey: "teliId"
      });
    }
  }
  TeliPengiriman.init({
    pengirimanId: DataTypes.INTEGER,
    teliId: DataTypes.INTEGER,
    tonase: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'TeliPengiriman',
  });
  return TeliPengiriman;
};