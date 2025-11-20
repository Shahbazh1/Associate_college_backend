"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Timetables", [
      {
        session: "2023-2024",
        class: "11th",
        groupName: "Science",
        field: "Medical",
        timetable: JSON.stringify({
          Monday: {
            "Period 1": { subject: "Math", teacher: "Mr. Ali", time: "9:00-9:45" },
            "Period 2": { subject: "Physics", teacher: "Ms. Sara", time: "9:45-10:30" },
            "Period 3": { subject: "Chemistry", teacher: "Mr. Khan", time: "10:30-11:15" },
            "Period 4": { subject: "Break", teacher: "", time: "11:15-11:30" },
            "Period 5": { subject: "Biology", teacher: "Ms. Fatima", time: "11:30-12:15" },
            "Period 6": { subject: "English", teacher: "Mr. Ahmad", time: "12:15-1:00" },
            "Period 7": { subject: "Computer", teacher: "Ms. Sana", time: "1:00-1:45" },
            "Period 8": { subject: "History", teacher: "Mr. Ali", time: "1:45-2:30" }
          },
          Tuesday: {
            "Period 1": { subject: "Physics", teacher: "Ms. Sara", time: "9:00-9:45" },
            "Period 2": { subject: "Math", teacher: "Mr. Ali", time: "9:45-10:30" },
            "Period 3": { subject: "Biology", teacher: "Ms. Fatima", time: "10:30-11:15" },
            "Period 4": { subject: "Break", teacher: "", time: "11:15-11:30" },
            "Period 5": { subject: "Chemistry", teacher: "Mr. Khan", time: "11:30-12:15" },
            "Period 6": { subject: "English", teacher: "Mr. Ahmad", time: "12:15-1:00" },
            "Period 7": { subject: "History", teacher: "Mr. Ali", time: "1:00-1:45" },
            "Period 8": { subject: "Computer", teacher: "Ms. Sana", time: "1:45-2:30" }
          },
          Wednesday: {
            "Period 1": { subject: "Chemistry", teacher: "Mr. Khan", time: "9:00-9:45" },
            "Period 2": { subject: "Biology", teacher: "Ms. Fatima", time: "9:45-10:30" },
            "Period 3": { subject: "Math", teacher: "Mr. Ali", time: "10:30-11:15" },
            "Period 4": { subject: "Break", teacher: "", time: "11:15-11:30" },
            "Period 5": { subject: "Physics", teacher: "Ms. Sara", time: "11:30-12:15" },
            "Period 6": { subject: "Computer", teacher: "Ms. Sana", time: "12:15-1:00" },
            "Period 7": { subject: "English", teacher: "Mr. Ahmad", time: "1:00-1:45" },
            "Period 8": { subject: "History", teacher: "Mr. Ali", time: "1:45-2:30" }
          },
          Thursday: {
            "Period 1": { subject: "Biology", teacher: "Ms. Fatima", time: "9:00-9:45" },
            "Period 2": { subject: "Chemistry", teacher: "Mr. Khan", time: "9:45-10:30" },
            "Period 3": { subject: "Physics", teacher: "Ms. Sara", time: "10:30-11:15" },
            "Period 4": { subject: "Break", teacher: "", time: "11:15-11:30" },
            "Period 5": { subject: "Math", teacher: "Mr. Ali", time: "11:30-12:15" },
            "Period 6": { subject: "History", teacher: "Mr. Ali", time: "12:15-1:00" },
            "Period 7": { subject: "English", teacher: "Mr. Ahmad", time: "1:00-1:45" },
            "Period 8": { subject: "Computer", teacher: "Ms. Sana", time: "1:45-2:30" }
          },
          Friday: {
            "Period 1": { subject: "Math", teacher: "Mr. Ali", time: "9:00-9:45" },
            "Period 2": { subject: "English", teacher: "Mr. Ahmad", time: "9:45-10:30" },
            "Period 3": { subject: "Physics", teacher: "Ms. Sara", time: "10:30-11:15" },
            "Period 4": { subject: "Break", teacher: "", time: "11:15-11:30" },
            "Period 5": { subject: "Chemistry", teacher: "Mr. Khan", time: "11:30-12:15" },
            "Period 6": { subject: "Biology", teacher: "Ms. Fatima", time: "12:15-1:00" },
            "Period 7": { subject: "Computer", teacher: "Ms. Sana", time: "1:00-1:45" },
            "Period 8": { subject: "History", teacher: "Mr. Ali", time: "1:45-2:30" }
          }
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Timetables", null, {});
  }
};