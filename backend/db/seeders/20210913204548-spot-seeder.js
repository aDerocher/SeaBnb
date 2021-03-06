'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        name: "S.S. Anne",
        location: "Kyoto, Japan",
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
        location: "New York City, New York, United States",
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
      {
        name: "Chocobo",
        location: "Tokyo, Japan",
        price: 55000,
        host: 5,
        description: "A day on this cruise is as good as a day at the races. Only better!",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://cdn.boatinternational.com/convert/files/2021/09/63b5eae0-163f-11ec-9232-c3c8c053c243-HOMe-Superyacht-for-sale-charter-01.jpg/r%5Bheight%5D=350/63b5eae0-163f-11ec-9232-c3c8c053c243-HOMe-Superyacht-for-sale-charter-01.webp",
        photo2: "https://cdn.boatinternational.com/convert/files/2021/09/64025d30-163f-11ec-9232-c3c8c053c243-HOMe-Superyacht-for-sale-charter-18.jpg/r%5Bheight%5D=350/64025d30-163f-11ec-9232-c3c8c053c243-HOMe-Superyacht-for-sale-charter-18.webp",
        photo3: "https://cdn.boatinternational.com/convert/files/2021/09/644afef0-163f-11ec-a530-c12f69aece46-HOMe-Superyacht-for-sale-charter-14.jpg/r%5Bheight%5D=350/644afef0-163f-11ec-a530-c12f69aece46-HOMe-Superyacht-for-sale-charter-14.webp",
        photo4: "https://cdn.boatinternational.com/convert/files/2021/09/639fcad0-163f-11ec-ae07-e7f8695d16bf-HOMe-Superyacht-for-sale-charter-10.jpg/r%5Bheight%5D=350/639fcad0-163f-11ec-ae07-e7f8695d16bf-HOMe-Superyacht-for-sale-charter-10.webp",
        photo5: "https://cdn.boatinternational.com/convert/files/2021/09/62f77ce0-163f-11ec-a530-c12f69aece46-HOMe-Superyacht-for-sale-charter-03.jpg/r%5Bheight%5D=350/62f77ce0-163f-11ec-a530-c12f69aece46-HOMe-Superyacht-for-sale-charter-03.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Isoscelese",
        location: "Tampa, Florida, USA",
        price: 50000,
        host: 6,
        description: "Triangles are my favorite shape. Three points where two lines meet",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://i.insider.com/5a72424324d505af0b8b4855?width=800&format=jpeg&auto=webp",
        photo2: "https://i.insider.com/5a724243107290d31a8b470b?width=800&format=jpeg&auto=webp",
        photo3: "https://i.insider.com/5a7242437e7a351d008b4d95?width=800&format=jpeg&auto=webp",
        photo4: "https://i.insider.com/5a724243af61d8841b8b474a?width=800&format=jpeg&auto=webp",
        photo5: "https://i.insider.com/5a72421624d505691b8b4738?width=800&format=jpeg&auto=webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Giardia",
        location: "Los Angeles, California, USA",
        price: 46000,
        host: 7,
        description: "I overheard this name being said in a hospital and just thought it was so lovely!",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://i.insider.com/5a7241ee59d432650d8b4c04?width=800&format=jpeg&auto=webp",
        photo2: "https://i.insider.com/5a7241ed7e7a35b6368b4a21?width=800&format=jpeg&auto=webp",
        photo3: "https://i.insider.com/5a7241ed107290d41a8b4741?width=800&format=jpeg&auto=webp",
        photo4: "https://i.insider.com/5a7241ed24d50583028b48e5?width=800&format=jpeg&auto=webp",
        photo5: "https://i.insider.com/5a7242167e7a35f10c8b4c24?width=800&format=jpeg&auto=webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tigers Blood",
        location: "Atlantic City, New Jersey, USA",
        price: 64000,
        host: 8,
        description: "This ship is THE BEST! WINNINNNNNNGGGG!!!!",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/eKfZ4NR3SFXUhMS0Ap9R_DARgallery5.jpg/r%5Bwidth%5D=960/eKfZ4NR3SFXUhMS0Ap9R_DARgallery5.webp",
        photo2: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/oLEEGLqETF2HnknDV6Oc_DARgallery3.jpg/r%5Bwidth%5D=960/oLEEGLqETF2HnknDV6Oc_DARgallery3.webp",
        photo3: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/2K6S0ae9SwqFQTk9kgWV_DARgallery8.jpg/r%5Bwidth%5D=960/2K6S0ae9SwqFQTk9kgWV_DARgallery8.webp",
        photo4: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/RItvr6dQ6dV7YS3RewAw_DARgallery9.jpg/r%5Bwidth%5D=960/RItvr6dQ6dV7YS3RewAw_DARgallery9.webp",
        photo5: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/jRAoFkkFTJKjRKnVfDY0_DARInterior3.jpg/r%5Bwidth%5D=960/jRAoFkkFTJKjRKnVfDY0_DARInterior3.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "I Do",
        location: "Metropolis",
        price: 100000,
        host: 9,
        description: "The most magestic ship you'll ever experience. The name is a mystery that many speculate about, but only few know the truth behind.",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/Mu6bgawWR6Oi21jAP9bj_Octopus-superyacht-5.jpg/r%5Bwidth%5D=960/Mu6bgawWR6Oi21jAP9bj_Octopus-superyacht-5.webp",
        photo2: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/neChQlryS7Ca6CwJC8fq_Octopus-superyacht-1.jpg/r%5Bwidth%5D=960/neChQlryS7Ca6CwJC8fq_Octopus-superyacht-1.webp",
        photo3: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/l4bK4FSlTrWOgrEZDboh_Octopus-superyacht-3.jpg/r%5Bwidth%5D=960/l4bK4FSlTrWOgrEZDboh_Octopus-superyacht-3.webp",
        photo4: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/EDandgQwmGNPNUdVnOwX_Octopus-superyacht-15.jpg/r%5Bwidth%5D=960/EDandgQwmGNPNUdVnOwX_Octopus-superyacht-15.webp",
        photo5: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/lYtM7yxQhmMaNT90NLBQ_Octopus-superyacht-14.jpg/r%5Bwidth%5D=960/lYtM7yxQhmMaNT90NLBQ_Octopus-superyacht-14.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Envy",
        location: "Orlando, Florida, USA",
        price: 75000,
        host: 10,
        description: "Finest ship in the burmuda triangle. Way better than that uggo the Isoscelese...",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f411b2b58755f335e00d0d9%2FThis-is-usually-the-only-view-most-of-us-ever-get-of-the-351-foot-long-superyacht%2F960x0.jpg%3FcropX1%3D576%26cropX2%3D1887%26cropY1%3D374%26cropY2%3D980",
        photo2: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f411b98a84de2595800d0d9%2FThe-main-deck-of-the-351-foot-long-LANA-%2F960x0.jpg%3Ffit%3Dscale",
        photo3: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f411bcb8b22b088fa1be027%2FThe-the-351-foot-long-superyacht-LANA-has-a-distinctive-pool-high-on-the-main-deck-%2F960x0.jpg%3Ffit%3Dscale",
        photo4: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f411e5641a4cbcd57b150c8%2FThe-Benetti-built-superyacht-LANA-features-massive-windows-and-elegant-decor%2F960x0.jpg%3Ffit%3Dscale",
        photo5: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f411cbc003d2e5a811be027%2FBreakfast-is-served-onboard-the-Benetti-Gigayacht-LANA-%2F960x0.jpg%3Ffit%3Dscale",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Thanks Santa",
        location: "North Pole",
        price: 66000,
        host: 11,
        description: "Amazing ship, all the fixins. Ergonomics on it are slightly undesized. Can't figure out why though.",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://i.insider.com/5a731d7b24d50580008b49ae?width=800&format=jpeg&auto=webp",
        photo2: "https://i.insider.com/5a731feb85cdd447008b460a?width=800&format=jpeg&auto=webp",
        photo3: "https://i.insider.com/5a731feb107290d71a8b47f2?width=800&format=jpeg&auto=webp",
        photo4: "https://i.insider.com/5a731feb24d505721b8b47ed?width=800&format=jpeg&auto=webp",
        photo5: "https://i.insider.com/5a731febaf61d8851b8b47b1?width=800&format=jpeg&auto=webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Titanic II",
        location: "Athens, Greece",
        price: 150000,
        host: 12,
        description: "Can accomodate all the guests you could ever hope for. Not only that, but this ship is absolutely, definately unsinkable!! it Has THREE hulls!!",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://cdn.boatinternational.com/convert/files/2021/08/205638c0-f3af-11eb-90e4-c9a223ff72d4-Somnio-hero.jpg/r%5Bwidth%5D=960/205638c0-f3af-11eb-90e4-c9a223ff72d4-Somnio-hero.webp",
        photo2: "https://cdn.boatinternational.com/convert/files/2021/09/4bfa0540-1099-11ec-a7ce-b3c844e58ee6-Winch-design-apartment-somnio.jpg/r%5Bwidth%5D=960/4bfa0540-1099-11ec-a7ce-b3c844e58ee6-Winch-design-apartment-somnio.webp",
        photo3: "https://cdn.boatinternational.com/convert/files/2021/09/d2ead8b0-122c-11ec-995f-332fa87807ea-Somnio-Port-Hercules.jpg/r%5Bwidth%5D=960/d2ead8b0-122c-11ec-995f-332fa87807ea-Somnio-Port-Hercules.webp",
        photo4: "https://cdn.boatinternational.com/convert/files/2021/09/4bfa0540-1099-11ec-a7ce-b3c844e58ee6-Winch-design-apartment-somnio.jpg/r%5Bwidth%5D=960/4bfa0540-1099-11ec-a7ce-b3c844e58ee6-Winch-design-apartment-somnio.webp",
        photo5: "https://cdn.boatinternational.com/convert/files/2021/09/4c1a3770-1099-11ec-a7ce-b3c844e58ee6-Somnio-tillberg-design-of-sweden.jpg/r%5Bwidth%5D=960/4c1a3770-1099-11ec-a7ce-b3c844e58ee6-Somnio-tillberg-design-of-sweden.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lucy In the Sky",
        location: "New Dheli, India",
        price: 88000,
        host: 13,
        description: "This ship was built for my friend. Shine on you crazy diamond!",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://cdn.boatinternational.com/convert/files/2021/09/ab3dc770-16e4-11ec-81d6-4b1d10431d6c-Polaris-at-anchor.jpg/r%5Bwidth%5D=960/ab3dc770-16e4-11ec-81d6-4b1d10431d6c-Polaris-at-anchor.webp",
        photo2: "https://cdn.boatinternational.com/convert/files/2021/09/ab331910-16e4-11ec-989f-cdf62aa732c4-Polaris-spa-pool.jpg/r%5Bwidth%5D=960/ab331910-16e4-11ec-989f-cdf62aa732c4-Polaris-spa-pool.webp",
        photo3: "https://cdn.boatinternational.com/convert/files/2021/09/ab1ea6b0-16e4-11ec-989f-cdf62aa732c4-Polaris-art-sculpture.jpg/r%5Bwidth%5D=960/ab1ea6b0-16e4-11ec-989f-cdf62aa732c4-Polaris-art-sculpture.webp",
        photo4: "https://cdn.boatinternational.com/convert/files/2021/09/ab4d09b0-16e4-11ec-83a8-35e65bf125e0-Polaris-outdoor-dining.jpg/r%5Bwidth%5D=960/ab4d09b0-16e4-11ec-83a8-35e65bf125e0-Polaris-outdoor-dining.webp",
        photo5: "https://cdn.boatinternational.com/convert/files/2021/09/ab4b34f0-16e4-11ec-81d6-4b1d10431d6c-Polaris-guest-lobby.jpg/r%5Bwidth%5D=960/ab4b34f0-16e4-11ec-81d6-4b1d10431d6c-Polaris-guest-lobby.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Peanuts",
        location: "Dubai, UAE",
        price: 144000,
        host: 14,
        description: "This ship has absolutely every amenity that could be added to a ship. But I grew tired of it, and wanted one with two of everything.",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://yachtharbour.com/static/uploads/2239_1337e.jpg",
        photo2: "https://yachtharbour.com/static/uploads/2239_1b7d7.jpg",
        photo3: "https://yachtharbour.com/static/uploads/2239_d3ad3.jpg",
        photo4: "https://yachtharbour.com/static/uploads/2239_38c73.jpg",
        photo5: "https://yachtharbour.com/static/uploads/2239_b6809.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Beagle",
        location: "Madagascar",
        price: 30000,
        host: 15,
        description: "Take a ride on the Beagle! You never know what you might discover!",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://i.insider.com/5a70889959d432120f8b477f?width=800&format=jpeg&auto=webp",
        photo2: "https://i.insider.com/5a70a99959d43229008b4a72?width=800&format=jpeg&auto=webp",
        photo3: "https://i.insider.com/5a7088997e7a35c70f8b4746?width=800&format=jpeg&auto=webp",
        photo4: "https://i.insider.com/5a72414b24d5050d028b48fb?width=800&format=jpeg&auto=webp",
        photo5: "https://i.insider.com/5a72414b7e7a3524008b4d92?width=800&format=jpeg&auto=webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Mayflower",
        location: "West Indies",
        price: 29000,
        host: 16,
        description: "You can sail to all four corners of the earth in this badboy. Just don't go too far or you'll fall off the edge!",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://i.insider.com/5a72409b24d505c7038b4905?width=800&format=jpeg&auto=webp",
        photo2: "https://i.insider.com/5a72409b24d505671b8b475b?width=800&format=jpeg&auto=webp",
        photo3: "https://i.insider.com/5a72409b107290d71a8b4749?width=800&format=jpeg&auto=webp",
        photo4: "https://i.insider.com/5a72409b59d4328c018b4d95?width=800&format=jpeg&auto=webp",
        photo5: "https://i.insider.com/5a72409b7e7a35d70f8b4ba9?width=800&format=jpeg&auto=webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Organica",
        location: "Sydney, Australia",
        price: 51000,
        host: 17,
        description: "Fresh air and open sea is all you need! Let this lovely ship take you there.",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://i.insider.com/5a7240e8af61d888008b48d7?width=800&format=jpeg&auto=webp",
        photo2: "https://i.insider.com/5a8306bbd030724d018b46d0?width=800&format=jpeg&auto=webp",
        photo3: "https://i.insider.com/5a8306aed03072c40f8b459e?width=800&format=jpeg&auto=webp",
        photo4: "https://i.insider.com/5a7240e824d5051e008b4947?width=800&format=jpeg&auto=webp",
        photo5: "https://i.insider.com/5a72411659d432120f8b4bbc?width=800&format=jpeg&auto=webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nimbus",
        location: "Auckland, New Zealand",
        price: 77000,
        host: 18,
        description: "Captains Log: Seadate ... Kip I was asking you a question! Have you finished the description for the ship yet?",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://cdn.boatinternational.com/convert/files/2020/12/a6960510-412f-11eb-8984-799ecf079b01-artefact-underway-%C2%A9franciscoMartinez.jpg/r%5Bwidth%5D=960/a6960510-412f-11eb-8984-799ecf079b01-artefact-underway-%C2%A9franciscoMartinez.webp",
        photo2: "https://cdn.boatinternational.com/convert/files/2020/12/a6604f10-412f-11eb-9ffb-2d61b8983681-aretefact-aft-%C2%A9franciscoMartinez.jpg/r%5Bwidth%5D=960/a6604f10-412f-11eb-9ffb-2d61b8983681-aretefact-aft-%C2%A9franciscoMartinez.webp",
        photo3: "https://cdn.boatinternational.com/convert/files/2020/12/6615c790-414e-11eb-afc1-6162a193af68-%C2%A9franciscoMartinez_ARTEFACT_1853.jpg/r%5Bwidth%5D=960/6615c790-414e-11eb-afc1-6162a193af68-%C2%A9franciscoMartinez_ARTEFACT_1853.webp",
        photo4: "https://cdn.boatinternational.com/convert/files/2020/12/65e6c850-414e-11eb-9e2b-13574f3de558-%C2%A9franciscoMartinez_ARTEFACT_3587.jpg/r%5Bwidth%5D=960/65e6c850-414e-11eb-9e2b-13574f3de558-%C2%A9franciscoMartinez_ARTEFACT_3587.webp",
        photo5: "https://cdn.boatinternational.com/convert/files/2020/12/65bf1c10-414e-11eb-a46a-f5d0431d0dd9-%C2%A9franciscoMartinez_ARTEFACT_3570.jpg/r%5Bwidth%5D=960/65bf1c10-414e-11eb-a46a-f5d0431d0dd9-%C2%A9franciscoMartinez_ARTEFACT_3570.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Name it whatever you want",
        location: "Johannesburg, South Africa",
        price: 50000,
        host: 19,
        description: "Sorry about the name, my husband thought he was being funny. This is a fantastic ship with lots and lots of bonuses. Enjoy!",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://i.insider.com/5a72417024d5051d008b490b?width=800&format=jpeg&auto=webp",
        photo2: "https://i.insider.com/5a7241707e7a35f10c8b4c23?width=800&format=jpeg&auto=webp",
        photo3: "https://i.insider.com/5a724170107290d41a8b473f?width=800&format=jpeg&auto=webp",
        photo4: "https://i.insider.com/5a7241c7af61d8f4038b48bc?width=800&format=jpeg&auto=webp",
        photo5: "https://i.insider.com/5a72417059d432650d8b4c02?width=800&format=jpeg&auto=webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rapture",
        location: "Atlantis",
        price: 51000,
        host: 20,
        description: "This yacht is styled like a military battleship. They told me this yacht was impossible to build like this. I told them it was impossible to build it any other way!",
        reviews: null,
        rules: null,
        amenities: null,
        photo1: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/NKFt4SH0SLxLXkAQeheo_bold-superyacht-portrait.jpg/r%5Bwidth%5D=1920/NKFt4SH0SLxLXkAQeheo_bold-superyacht-portrait.webp",
        photo2: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/8RBWmBcSRS2Z78pEg1IQ_BOLD-superyacht-Guillaume-Plisson-8.gif/r%5Bwidth%5D=1366/8RBWmBcSRS2Z78pEg1IQ_BOLD-superyacht-Guillaume-Plisson-8.webp",
        photo3: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/SqAt2ETEQ8eIAajqUnSt_bold-saloon-credit-Guillaume-Plisson.gif/r%5Bwidth%5D=1366/SqAt2ETEQ8eIAajqUnSt_bold-saloon-credit-Guillaume-Plisson.webp",
        photo4: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/4rbngP5SmmxNQh4t7pGB_BOLD-superyacht-Guillaume-Plisson-14.gif/r%5Bwidth%5D=1366/4rbngP5SmmxNQh4t7pGB_BOLD-superyacht-Guillaume-Plisson-14.webp",
        photo5: "https://cdn.boatinternational.com/convert/bi_prd/bi/library_images/3wz3aiouSp9uyPK3Ze3k_bold-pool-credit-Guillaume-Plisson.gif/r%5Bwidth%5D=1366/3wz3aiouSp9uyPK3Ze3k_bold-pool-credit-Guillaume-Plisson.webp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Spots', null, {});

  }
};
