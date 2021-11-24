'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bookings', [
        {
          guest: 1,
          spot: 3,
          checkIn: new Date(2020, 4, 11),
          checkOut: new Date(2020, 4, 18),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 1,
          spot: 4,
          checkIn: new Date(2020, 8, 10),
          checkOut: new Date(2020, 8, 20),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 1,
          spot: 5,
          checkIn: new Date(2020, 3, 1),
          checkOut: new Date(2020, 3, 4),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 2,
          spot: 4,
          checkIn: new Date(2020, 1, 1),
          checkOut: new Date(2020, 1, 9),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 2,
          spot: 5,
          checkIn: new Date(2020, 2, 12),
          checkOut: new Date(2020, 2, 18),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 2,
          spot: 6,
          checkIn: new Date(2020, 3, 12),
          checkOut: new Date(2020, 3, 13),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 3,
          spot: 5,
          checkIn: new Date(2020, 11, 1),
          checkOut: new Date(2020, 11, 11),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 3,
          spot: 6,
          checkIn: new Date(2020, 10, 7),
          checkOut: new Date(2020, 10, 16),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 3,
          spot: 7,
          checkIn: new Date(2020, 6, 6),
          checkOut: new Date(2020, 6, 16),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 4,
          spot: 6,
          checkIn: new Date(2020, 5, 10),
          checkOut: new Date(2020, 5, 14),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 4,
          spot: 7,
          checkIn: new Date(2020, 3, 6),
          checkOut: new Date(2020, 3, 17),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 4,
          spot: 8,
          checkIn: new Date(2020, 6, 5),
          checkOut: new Date(2020, 6, 9),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 5,
          spot: 7,
          checkIn: new Date(2020, 8, 11),
          checkOut: new Date(2020, 8, 17),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 5,
          spot: 8,
          checkIn: new Date(2020, 6, 5),
          checkOut: new Date(2020, 6, 7),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 5,
          spot: 9,
          checkIn: new Date(2020, 3, 14),
          checkOut: new Date(2020, 3, 22),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 6,
          spot: 8,
          checkIn: new Date(2020, 2, 5),
          checkOut: new Date(2020, 2, 14),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 6,
          spot: 9,
          checkIn: new Date(2020, 7, 5),
          checkOut: new Date(2020, 7, 11),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 6,
          spot: 10,
          checkIn: new Date(2020, 9, 9),
          checkOut: new Date(2020, 9, 17),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 7,
          spot: 9,
          checkIn: new Date(2020, 1, 5),
          checkOut: new Date(2020, 1, 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 7,
          spot: 10,
          checkIn: new Date(2020, 4, 1),
          checkOut: new Date(2020, 4, 2),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 7,
          spot: 11,
          checkIn: new Date(2020, 9, 11),
          checkOut: new Date(2020, 9, 20),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 8,
          spot: 10,
          checkIn: new Date(2020, 5, 12),
          checkOut: new Date(2020, 5, 19),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 8,
          spot: 11,
          checkIn: new Date(2020, 9, 14),
          checkOut: new Date(2020, 9, 19),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 8,
          spot: 12,
          checkIn: new Date(2020, 4, 12),
          checkOut: new Date(2020, 4, 20),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 9,
          spot: 11,
          checkIn: new Date(2020, 2, 4),
          checkOut: new Date(2020, 2, 11),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 9,
          spot: 12,
          checkIn: new Date(2020, 8, 3),
          checkOut: new Date(2020, 8, 11),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 9,
          spot: 13,
          checkIn: new Date(2020, 10, 4),
          checkOut: new Date(2020, 10, 6),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 10,
          spot: 12,
          checkIn: new Date(2020, 7, 2),
          checkOut: new Date(2020, 7, 12),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 10,
          spot: 13,
          checkIn: new Date(2020, 9, 13),
          checkOut: new Date(2020, 9, 17),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 10,
          spot: 14,
          checkIn: new Date(2020, 9, 5),
          checkOut: new Date(2020, 9, 9),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 11,
          spot: 13,
          checkIn: new Date(2020, 7, 12),
          checkOut: new Date(2020, 7, 13),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 11,
          spot: 14,
          checkIn: new Date(2020, 10, 5),
          checkOut: new Date(2020, 10, 14),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 11,
          spot: 15,
          checkIn: new Date(2020, 4, 1),
          checkOut: new Date(2020, 4, 8),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 12,
          spot: 14,
          checkIn: new Date(2020, 6, 3),
          checkOut: new Date(2020, 6, 4),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 12,
          spot: 15,
          checkIn: new Date(2020, 10, 11),
          checkOut: new Date(2020, 10, 12),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 12,
          spot: 16,
          checkIn: new Date(2020, 8, 8),
          checkOut: new Date(2020, 8, 11),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 13,
          spot: 15,
          checkIn: new Date(2020, 4, 10),
          checkOut: new Date(2020, 4, 11),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 13,
          spot: 16,
          checkIn: new Date(2020, 4, 13),
          checkOut: new Date(2020, 4, 16),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 13,
          spot: 17,
          checkIn: new Date(2020, 3, 6),
          checkOut: new Date(2020, 3, 11),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 14,
          spot: 16,
          checkIn: new Date(2020, 6, 6),
          checkOut: new Date(2020, 6, 16),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 14,
          spot: 17,
          checkIn: new Date(2020, 11, 9),
          checkOut: new Date(2020, 11, 14),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 14,
          spot: 18,
          checkIn: new Date(2020, 7, 2),
          checkOut: new Date(2020, 7, 14),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 15,
          spot: 17,
          checkIn: new Date(2020, 1, 9),
          checkOut: new Date(2020, 1, 17),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 15,
          spot: 18,
          checkIn: new Date(2020, 9, 2),
          checkOut: new Date(2020, 9, 13),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 15,
          spot: 19,
          checkIn: new Date(2020, 4, 1),
          checkOut: new Date(2020, 4, 9),
          createdAt: new Date(),
          updatedAt: new Date()
        },
    {
          guest: 16,
          spot: 18,
          checkIn: new Date(2020, 9, 10),
          checkOut: new Date(2020, 9, 22),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 16,
          spot: 19,
          checkIn: new Date(2020, 7, 5),
          checkOut: new Date(2020, 7, 13),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          guest: 16,
          spot: 20,
          checkIn: new Date(2020, 3, 3),
          checkOut: new Date(2020, 3, 7),
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Bookings', null, {});

  }
};
