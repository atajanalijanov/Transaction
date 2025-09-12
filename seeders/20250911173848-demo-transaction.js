'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('transactions', [
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 1000,
          type: "income",
          createdAt: new Date('2025-01-01T12:00:00Z'),
          updatedAt: new Date('2025-01-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 50,
          type: "expense",
          createdAt: new Date('2025-02-01T12:00:00Z'),
          updatedAt: new Date('2025-02-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 50,
          type: "expense",
          createdAt: new Date('2025-03-01T12:00:00Z'),
          updatedAt: new Date('2025-03-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 50,
          type: "expense",
          createdAt: new Date('2025-04-01T12:00:00Z'),
          updatedAt: new Date('2025-04-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 50,
          type: "expense",
          createdAt: new Date('2025-05-01T12:00:00Z'),
          updatedAt: new Date('2025-05-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 50,
          type: "expense",
          createdAt: new Date('2025-06-01T12:00:00Z'),
          updatedAt: new Date('2025-06-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 50,
          type: "expense",
          createdAt: new Date('2025-07-01T12:00:00Z'),
          updatedAt: new Date('2025-07-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 50,
          type: "expense",
          createdAt: new Date('2025-08-01T12:00:00Z'),
          updatedAt: new Date('2025-08-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 50,
          type: "expense",
          createdAt: new Date('2025-09-01T12:00:00Z'),
          updatedAt: new Date('2025-09-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 50,
          type: "expense",
          createdAt: new Date('2025-10-01T12:00:00Z'),
          updatedAt: new Date('2025-10-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 5,
          type: "expense",
          createdAt: new Date('2025-11-01T12:00:00Z'),
          updatedAt: new Date('2025-11-01T12:00:00Z'),
        },
        {
          userId: 2,
          title: "Dinner Turkmen tagam",
          amount: 500,
          type: "income",
          createdAt: new Date('2025-12-01T12:00:00Z'),
          updatedAt: new Date('2025-12-01T12:00:00Z'),
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});

  }
};
