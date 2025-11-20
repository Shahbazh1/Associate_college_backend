'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roll_no: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      father_name: {
        type: Sequelize.STRING
      },
      group: {
        type: Sequelize.STRING
      },
      field: {
        type: Sequelize.STRING
      },
      session: {
        type: Sequelize.STRING
      },
      contact_no: {
        type: Sequelize.STRING
      },
      home_address: {
        type: Sequelize.STRING
      },
      marks_obtained: {
        type: Sequelize.INTEGER
      },
      fees_status: {
        type: Sequelize.STRING
      },
      amount_paid: {
        type: Sequelize.INTEGER
      },
      subjects: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Students');
  }
};