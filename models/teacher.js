'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teacher.init({
    fullName: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    idCardNumber: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    domicile: DataTypes.STRING,
    homeAddress: DataTypes.STRING,
    division: DataTypes.STRING,
    district: DataTypes.STRING,
    tehsil: DataTypes.STRING,
    ddoCode: DataTypes.STRING,
    cmisCode: DataTypes.STRING,
    collegeName: DataTypes.STRING,
    qualification: DataTypes.STRING,
    designation: DataTypes.STRING,
    subject: DataTypes.STRING,
    bsNo: DataTypes.STRING,
    cadre: DataTypes.STRING,
    seniorityNo: DataTypes.STRING,
    dateOfFirstEntry: DataTypes.DATE,
    dateOfPosting: DataTypes.DATE,
    dateOfSelectionRegular: DataTypes.DATE,
    dateOfSelectionAdhoc: DataTypes.DATE,
    dateOfSelectionContract: DataTypes.DATE,
    dateOfPromotionLecturer: DataTypes.DATE,
    dateOfPromotionAssistantProfessor: DataTypes.DATE,
    dateOfPromotionAssociateProfessor: DataTypes.DATE,
    dateOfPromotionProfessor: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};