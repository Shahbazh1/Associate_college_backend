'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentAttendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentAttendance.init({
    session: DataTypes.STRING,
    class: DataTypes.STRING,
    groupName: DataTypes.STRING,
    field: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    studentRollNo: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentAttendance',
  });
  return StudentAttendance;
};