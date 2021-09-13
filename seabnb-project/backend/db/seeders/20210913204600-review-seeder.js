'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
    {
      guest: 2,
      score: 5,
      spot: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      content: "This boat was so nice. Bed was really comfy"
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
