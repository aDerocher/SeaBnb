'use strict';

'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: "Heather",
        lastName: "Heying",
        email: "hth@heathercodes.com",
        profilePhoto: "https://randomuser.me/api/portraits/women/30.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstName: "Jamie",
        lastName: "Thomas",
        email: "jthomas@zero.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/75.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstName: "Peter",
        lastName: "Boghossian",
        email: "peter@project.com",
        profilePhoto: "https://randomuser.me/api/portraits/men/13.jpg",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      firstName: { [Op.in]: ['Heather', 'Jamie', 'Peter'] }
    }, {});
  }
};