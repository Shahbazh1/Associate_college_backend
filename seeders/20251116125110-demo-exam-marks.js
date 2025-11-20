"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ExamMarks", [
      {
        session: "2023-2024",
        class: "11th",
        groupName: "Science",
        field: "Medical",
        examType: "Mid-Term",
        subject: "Biology",
        examDate: "2025-01-15",
        maxMarks: 50,
        obtainedMarks: 42,
        studentId: 101,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session: "2023-2024",
        class: "11th",
        groupName: "Science",
        field: "Medical",
        examType: "Mid-Term",
        subject: "Biology",
        examDate: "2025-01-15",
        maxMarks: 50,
        obtainedMarks: 38,
        studentId: 102,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ExamMarks", null, {});
  }
};
