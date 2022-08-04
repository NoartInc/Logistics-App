'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pengirimans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer: {
        type: Sequelize.INTEGER
      },
      suratJalan: {
        type: Sequelize.STRING
      },
      tujuan: {
        type: Sequelize.STRING
      },
      pengangkutan: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.TEXT
      },
      tonase: {
        type: Sequelize.DOUBLE
      },
      driver: {
        type: Sequelize.INTEGER
      },
      kendaraan: {
        type: Sequelize.INTEGER
      },
      sales: {
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('diproses', 'dimuat', 'termuat', 'dikirim', 'terkirim', 'pending', 'cancel'),
      },
      image: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Pengirimans');
  }
};