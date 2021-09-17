'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: "John",
        lastName: "Doe",
        email: "j@j.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/50.jpg",
        hashedPassword: "chicken",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Heather",
        lastName: "Heying",
        email: "hth@heathercodes.com",
        profilePhoto: "https://randomuser.me/api/portraits/women/30.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Jamie",
        lastName: "Thomas",
        email: "jthomas@zero.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/75.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Peter",
        lastName: "Boghossian",
        email: "peter@project.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/13.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Teddy",
        lastname: "Roosevelt",
        email: "teddyr@bearhunter.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/10.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Julian",
        lastname: "Assange",
        email: "jassange@wikileaks.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Edward",
        lastname: "Snowden",
        email: "esnowden@notnsa.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/4.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Sam",
        lastname: "Spaeth",
        email: "ss@doctorstuff.com",
        profilePhoto: "https://randomuser.me/api/portraits/women/47.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Ayn",
        lastname: "Rand",
        email: "randydandy@atlas.com",
        profilePhoto: "https://randomuser.me/api/portraits/women/48.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      firstName: { [Op.in]: ['Heather', 'Jamie',
      'Peter', 'John', 'Teddy', 'Ayn', 'Sam',
      'Edward', 'Julian'] }
    }, {});
  }
};