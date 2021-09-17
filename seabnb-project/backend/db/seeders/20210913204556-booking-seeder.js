'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bookings', [
        {
          guest: 1,
          spot: 2,
          checkIn: new Date(),
          checkOut: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Bookings', null, {});

  }
};
