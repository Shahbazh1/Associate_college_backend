"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("StudentAttendances", [
      // --- Attendance for 11th Science Medical ---
      {
        session: "2023-2024",
        class: "11th",
        groupName: "Science",
        field: "Medical",
        date: "2025-01-10",
        studentRollNo: "101",
        status: "Present",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        session: "2023-2024",
        class: "11th",
        groupName: "Science",
        field: "Medical",
        date: "2025-01-10",
        studentRollNo: "102",
        status: "Absent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        session: "2023-2024",
        class: "11th",
        groupName: "Science",
        field: "Medical",
        date: "2025-01-10",
        studentRollNo: "103",
        status: "Leave",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // --- Another date attendance ---
      {
        session: "2023-2024",
        class: "11th",
        groupName: "Science",
        field: "Medical",
        date: "2025-01-11",
        studentRollNo: "101",
        status: "Absent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        session: "2023-2024",
        class: "11th",
        groupName: "Science",
        field: "Medical",
        date: "2025-01-11",
        studentRollNo: "102",
        status: "Present",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        session: "2023-2024",
        class: "11th",
        groupName: "Science",
        field: "Medical",
        date: "2025-01-11",
        studentRollNo: "103",
        status: "Present",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("StudentAttendances", null, {});
  },
};
