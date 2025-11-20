'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentAttendances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      session: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      groupName: {
        type: Sequelize.STRING
      },
      field: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      studentRollNo: {
        type: Sequelize.STRING
      },
      status: {
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
    await queryInterface.dropTable('StudentAttendances');
  }
};