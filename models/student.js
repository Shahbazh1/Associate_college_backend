'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    roll_no: DataTypes.INTEGER,
    name: DataTypes.STRING,
    father_name: DataTypes.STRING,
    group: DataTypes.STRING,
    field: DataTypes.STRING,
    session: DataTypes.STRING,
    contact_no: DataTypes.STRING,
    home_address: DataTypes.STRING,
    marks_obtained: DataTypes.INTEGER,
    fees_status: DataTypes.STRING,
    amount_paid: DataTypes.INTEGER,
    subjects: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};