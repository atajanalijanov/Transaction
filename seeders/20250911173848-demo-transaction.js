'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('transactions', [
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 50,
          type: "expense",
          createdAt: new Date('2025-08-01T12:00:00Z'),
          updatedAt: new Date('2025-08-01T12:00:00Z'),
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});

  }
};
