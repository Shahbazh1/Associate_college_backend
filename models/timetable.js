'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timetable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Timetable.init({
    session: DataTypes.STRING,
    class: DataTypes.STRING,
    groupName: DataTypes.STRING,
    field: DataTypes.STRING,
    timetable: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Timetable',
  });
  return Timetable;
};