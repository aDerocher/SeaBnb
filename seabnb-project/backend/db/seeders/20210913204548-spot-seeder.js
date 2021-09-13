'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        name: "S.S. Anne",
        location: "Kyoto",
        price: 15000,
        host: 1,
        description: "This is a super nice ship",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://a5p8n3p9.stackpathcdn.com/wp-content/uploads/2016/01/mega-yachts-for-sale-natita-1024x684.jpg",
        photo2: "https://a5p8n3p9.stackpathcdn.com/wp-content/uploads/2016/01/mega-yachts-for-sale-main-salon-1024x582.jpg",
        photo3: "https://a5p8n3p9.stackpathcdn.com/wp-content/uploads/2016/01/mega-yachts-for-sale-natita-cinema-movie-theatre-1024x684.jpg",
        photo4: "https://a5p8n3p9.stackpathcdn.com/wp-content/uploads/2016/01/mega-yachts-for-sale-natita-guest-cabin-blue-1024x684.jpg",
        photo5: "https://a5p8n3p9.stackpathcdn.com/wp-content/uploads/2016/01/mega-yachts-for-sale-natita-wellness-1024x582.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "GME",
        location: "Los Angeles, CA",
        price: 9000,
        host: 2,
        description:"Only smooth-brains sell!",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://www.hamptonyachtgroup.com/uploads/_browserWidth/72-Endurance-Profile.jpg",
        photo2: "https://www.hamptonyachtgroup.com/uploads/_browserWidth/72-Endurance-Cockpit.jpg",
        photo3: "https://www.hamptonyachtgroup.com/uploads/_browserWidth/72-Endurance-Skylounge.jpg",
        photo4: "https://www.hamptonyachtgroup.com/uploads/_browserWidth/72-Endurance-Salon2.jpg",
        photo5: "https://www.hamptonyachtgroup.com/uploads/_browserWidth/72-Endurance-Master.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Moon",
        location: "New York City, NY",
        price: 31000,
        host: 3,
        description:"This is my favorite boat.",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/20/1463484081-hessen-exterior.jpg?resize=980:*",
        photo2: "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/20/1463484408-hessen-dining-room.jpg?resize=980:*",
        photo3: "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/20/1463483132-hessen-bedroom.jpg?resize=980:*",
        photo4: "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/20/1463483925-hessen-light-fixture.jpg?resize=980:*",
        photo5: "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/20/1463483317-hessen-bathroom.jpg?resize=980:*",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hooks",
        location: "Monaco",
        price: 12000,
        host: 4,
        description:"Won this in a poker game with pocket jacks",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/17/qm-shot.jpg?resize=980:*",
        photo2: "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/17/qm-suite.jpg?resize=980:*",
        photo3: "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/17/qm-sundeck-seating.jpg?resize=980:*",
        photo4: "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/17/qm-salon.jpg?resize=980:*",
        photo5: "https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/17/qm-sundeck.jpg?resize=980:*",
        createdAt: new Date(),
        updatedAt: new Date()
      },

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
