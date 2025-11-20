'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      fatherName: {
        type: Sequelize.STRING
      },
      contactNumber: {
        type: Sequelize.STRING
      },
      idCardNumber: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      domicile: {
        type: Sequelize.STRING
      },
      homeAddress: {
        type: Sequelize.STRING
      },
      division: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      tehsil: {
        type: Sequelize.STRING
      },
      ddoCode: {
        type: Sequelize.STRING
      },
      cmisCode: {
        type: Sequelize.STRING
      },
      collegeName: {
        type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      designation: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      bsNo: {
        type: Sequelize.STRING
      },
      cadre: {
        type: Sequelize.STRING
      },
      seniorityNo: {
        type: Sequelize.STRING
      },
      dateOfFirstEntry: {
        type: Sequelize.DATE
      },
      dateOfPosting: {
        type: Sequelize.DATE
      },
      dateOfSelectionRegular: {
        type: Sequelize.DATE
      },
      dateOfSelectionAdhoc: {
        type: Sequelize.DATE
      },
      dateOfSelectionContract: {
        type: Sequelize.DATE
      },
      dateOfPromotionLecturer: {
        type: Sequelize.DATE
      },
      dateOfPromotionAssistantProfessor: {
        type: Sequelize.DATE
      },
      dateOfPromotionAssociateProfessor: {
        type: Sequelize.DATE
      },
      dateOfPromotionProfessor: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Teachers');
  }
};