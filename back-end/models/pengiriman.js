'use strict';
var moment = require('moment');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengiriman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Pengiriman.belongsTo(models.Customer,{
        as: 'customers',
        foreignKey: 'customer',
      })
      models.Pengiriman.hasMany(models.Customer,{
        foreignKey: 'customer'
      })
      models.Pengiriman.belongsTo(models.Customer,{
        as: 'addresses',
        foreignKey: 'address',
      })
      models.Pengiriman.belongsTo(models.Pengangkutan,{
        as: 'pengangkutans',
        foreignKey: 'pengangkutan',
      })
      models.Pengiriman.belongsTo(models.Users,{
        as: 'drivers',
        foreignKey: 'driver',
      })
      models.Pengiriman.belongsTo(models.Users,{
        as: 'salesMarketing',
        foreignKey: 'sales',
      })
      models.Pengiriman.belongsTo(models.Users,{
        as: 'users',
        foreignKey: 'user',
      })
      models.Pengiriman.belongsTo(models.Kendaraan,{
        as: 'kendaraans',
        foreignKey: 'kendaraan',
      })
      // models.Pengiriman.belongsTo(models.Teli,{
      //   as: 'telis',
      //   foreignKey: 'teli',
      // })
      models.Pengiriman.hasMany(models.TrackPengiriman,{
        as: 'history',
        foreignKey: 'pengirimanId'
      })
      models.Pengiriman.belongsToMany(models.Teli, { 
        as: 'teli',
        foreignKey: 'pengirimanId',
        through: models.TeliPengiriman 
      })
    }
  }
  Pengiriman.init({
    customer: DataTypes.INTEGER,
    suratJalan: DataTypes.STRING,
    tujuan: DataTypes.STRING,
    pengangkutan: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    tonase: DataTypes.DOUBLE,
    driver: DataTypes.INTEGER,
    kendaraan: DataTypes.INTEGER,
    sales: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    status: 
    { 
      type: DataTypes.ENUM('diproses', 'dimuat', 'termuat', 'dikirim', 'terkirim', 'pending', 'cancel'),
      default:'diproses'
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY');
      }
    }

  }, {
    sequelize,
    modelName: 'Pengiriman',
  });
  return Pengiriman;
};