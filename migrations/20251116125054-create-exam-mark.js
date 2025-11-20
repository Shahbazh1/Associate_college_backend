'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ExamMarks', {
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
      examType: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      examDate: {
        type: Sequelize.DATEONLY
      },
      maxMarks: {
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER
      },
      obtainedMarks: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ExamMarks');
  }
};