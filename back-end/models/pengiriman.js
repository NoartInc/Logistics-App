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
      models.Pengiriman.hasMany(models.TeliPengiriman, { 
        as: 'teli',
        foreignKey: 'pengirimanId'
      })
      models.Pengiriman.belongsTo(models.Produksi, {
        as: 'produksi_by',
        foreignKey: 'produksiId',
      })
    }
  }
  Pengiriman.init({
    customer: DataTypes.INTEGER,
    suratJalan: DataTypes.STRING,
    pengangkutan: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    tonase: DataTypes.DOUBLE,
    produksiId: DataTypes.INTEGER,
    driver: DataTypes.INTEGER,
    kendaraan: DataTypes.INTEGER,
    sales: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
    note: DataTypes.STRING,
    image: DataTypes.STRING,
    gudang:
    {
      type: DataTypes.ENUM('stok', 'custom'),
      default: 'custom'
    }, 
    tanggalOrder: DataTypes.DATE,
    tanggalKirim: DataTypes.DATE,
    informasi: DataTypes.TEXT,
    exclude: DataTypes.BOOLEAN,
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
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY HH:mm:ss');
      }
    }

  }, {
    sequelize,
    modelName: 'Pengiriman',
  });
  return Pengiriman;
};