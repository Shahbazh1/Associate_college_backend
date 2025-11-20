'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Students", [
      {
        roll_no: 1,
        name: "Muhammad Bilal",
        father_name: "Muhammad Ali",
        group: "Science",
        field: "Computer Science",
        session: "2025-27",
        contact_no: "3195547249",
        home_address: "Chak No3DB",
        marks_obtained: 850,
        fees_status: "Paid",
        amount_paid: 5000,
        subjects: JSON.stringify([
          "Physics",
          "Chemistry",
          "Mathematics",
          "Computer Science",
          "English",
          "Urdu",
          "Pakistan Studies"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Students", null, {});
  }
};
