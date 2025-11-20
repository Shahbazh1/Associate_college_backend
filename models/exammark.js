'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamMark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExamMark.init({
    session: DataTypes.STRING,
    class: DataTypes.STRING,
    groupName: DataTypes.STRING,
    field: DataTypes.STRING,
    examType: DataTypes.STRING,
    subject: DataTypes.STRING,
    examDate: DataTypes.DATEONLY,
    maxMarks: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    obtainedMarks: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ExamMark',
  });
  return ExamMark;
};