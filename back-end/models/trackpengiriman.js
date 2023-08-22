'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrackPengiriman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.TrackPengiriman.belongsTo(models.Users, {
        as: "proses_by",
        foreignKey: "userId"
      });
      models.TrackPengiriman.belongsTo(models.Produksi, {
        as: "produksi_by",
        foreignKey: "produksiId"
      });

      models.TrackPengiriman.hasMany(models.TeliPengiriman, {
        as: "teli",
        foreignKey: "pengirimanId"
      });
    }
  }
  TrackPengiriman.init({
    status: DataTypes.STRING,
    note: DataTypes.STRING,
    pengirimanId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    teliId: DataTypes.INTEGER,
    produksiId: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TrackPengiriman',
  });
  return TrackPengiriman;
};