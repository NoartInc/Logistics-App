'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PengirimanIssue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PengirimanIssue.init({
    issueName: DataTypes.STRING,
    issueType: {
      type: DataTypes.ENUM('produksi','logistik')
    }
  }, {
    sequelize,
    modelName: 'PengirimanIssue',
  });
  return PengirimanIssue;
};