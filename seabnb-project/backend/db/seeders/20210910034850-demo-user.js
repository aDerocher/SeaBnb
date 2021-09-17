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
      },
      {
        firstName: "George",
        lastName: "Washington",
        email: "george@delaware.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
        hashedPassword: "chicken",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Margaret",
        lastName: "Thatcher",
        email: "mrsm@thatcher.com",
        profilePhoto: "https://randomuser.me/api/portraits/women/31.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Elyssa",
        lastName: "Steamer",
        email: "elys@etnies.com",
        profilePhoto: "https://randomuser.me/api/portraits/women/74.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Aldous",
        lastName: "HUxley",
        email: "aldous@bnw.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/23.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Thomas",
        lastname: "Sowell",
        email: "tom@hoover.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/14.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Bart",
        lastname: "Garfunkle",
        email: "bartyman@snl.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Tina",
        lastname: "Fey",
        email: "tina@30rock.com",
        profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Beyonce",
        lastName: "QueenB",
        email: "queenb@ringonit.com",
        profilePhoto: "https://randomuser.me/api/portraits/women/23.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Quentin",
        lastname: "Terrantino",
        email: "movie9@hollywood.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/25.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Daniel",
        lastname: "Riccardo",
        email: "dricco@formula1.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Lisa",
        lastname: "Simpson",
        email: "lisa@springville.com",
        profilePhoto: "https://randomuser.me/api/portraits/women/5.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Guy",
        lastname: "Richie",
        email: "lockstock@smokingbarrels.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/25.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Marie",
        lastname: "Curie",
        email: "mc@sciencestuff.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: "Zach",
        lastname: "Nelson",
        email: "z@nelson.com",
        profilePhoto: "https://randomuser.me/api/portraits/women/5.jpg",
        hashedPassword: "chicken1!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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