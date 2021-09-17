'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
    {
      guest: ,
      score: ,
      spot: ,
      createdAt: new Date(),
      updatedAt: new Date(),
      content: ""
    },
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
    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
