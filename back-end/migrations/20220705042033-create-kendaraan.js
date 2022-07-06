'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kendaraans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kendaraan: {
        type: Sequelize.STRING
      },
      roda: {
        type: Sequelize.ENUM('roda-4','roda-6')
      },
      merk: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('active','inactive')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Kendaraans');
  }
};