'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        guest: 1,
        score: 5,
        spot: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 1,
        score: 4,
        spot: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 1,
        score: 5,
        spot: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 2,
        score: 5,
        spot: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 2,
        score: 4,
        spot: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 2,
        score: 5,
        spot: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 3,
        score: 5,
        spot: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 3,
        score: 4,
        spot: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 3,
        score: 5,
        spot: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 4,
        score: 5,
        spot: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 4,
        score: 4,
        spot: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 4,
        score: 5,
        spot: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 5,
        score: 5,
        spot: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 5,
        score: 4,
        spot: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 5,
        score: 5,
        spot: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 6,
        score: 5,
        spot: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 6,
        score: 4,
        spot: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 6,
        score: 5,
        spot: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 7,
        score: 5,
        spot: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 7,
        score: 4,
        spot: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 7,
        score: 5,
        spot: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 8,
        score: 5,
        spot: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 8,
        score: 4,
        spot: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 8,
        score: 5,
        spot: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 9,
        score: 5,
        spot: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 9,
        score: 4,
        spot: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 9,
        score: 5,
        spot: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 10,
        score: 5,
        spot: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 10,
        score: 4,
        spot: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 10,
        score: 5,
        spot: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 11,
        score: 5,
        spot: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 11,
        score: 4,
        spot: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 11,
        score: 5,
        spot: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 12,
        score: 5,
        spot: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 12,
        score: 4,
        spot: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 12,
        score: 5,
        spot: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 13,
        score: 5,
        spot: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 13,
        score: 4,
        spot: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 13,
        score: 5,
        spot: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
      {
        guest: 14,
        score: 5,
        spot: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "This ship is fantastic! I'ts very luxurious. I will certainly be booking again"
      },{
        guest: 14,
        score: 4,
        spot: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Really enjoyed my stay here"
      },
      {
        guest: 14,
        score: 5,
        spot: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
        content: "Top of the line experience. Lovely living areas!"
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
