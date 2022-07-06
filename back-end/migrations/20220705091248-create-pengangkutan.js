'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pengangkutans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pengangkutan: {
        type: Sequelize.STRING
      },
      pic: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Pengangkutans');
  }
};