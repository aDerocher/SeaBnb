const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Booking, Review } = require('../../db/models');
const { multiplePublicFileUpload, multipleMulterUpload } = require('../../awsS3')
const router = express.Router();


// ====== get all the spots from the database =======
router.get('/', asyncHandler(async (req, res) => {
  const allSpots = await Spot.findAll();
  return res.json(allSpots);
}));


// ====== get one spot and all its bookings and reviews from the database =======
router.get('/:id', asyncHandler(async (req, res) => {
  const spotId = parseInt(req.params.id, 10);
  const oneSpot = await Spot.findByPk(spotId);
  const spotBookings = await Booking.findAll({
    where: { spot: spotId }
  });
  const spotReviews = await Review.findAll({
    where: { spot: spotId }
  });
  return res.json({oneSpot});
}));

router.get('/:id/bookings', asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10);
    const spotBookings = await Booking.findAll({
      where: { spot: spotId }
    });
    return res.json(spotBookings);
}));


router.get('/:id/reviews', asyncHandler(async (req, res) => {
  const spotId = parseInt(req.params.id, 10);
  const spotReviews = await Review.findAll({
    where: { spot: spotId }
  });
  return res.json({spotReviews});
}));



// ====== create a new spot =======
router.post('/new', multipleMulterUpload("photos"), asyncHandler(async (req, res) => {
    const newPhotoLinks = await multiplePublicFileUpload(req.files);
    const { host,name,location,price,description } = req.body;
    const newSpot = {
        name: name,
        location: location,
        price: price,
        host: host,
        description: description
    };
    newPhotoLinks.forEach((pLink, i) => {
        newSpot[`photo${i+1}`] = pLink;
    });
    const createdSpot = await Spot.create(newSpot)
    return res.json({createdSpot});
}));

// ====== edit a spot =======
router.patch('/:id/edit', asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10);
    const {name, location, price, description} = req.body

    let editedSpot = await Spot.findByPk(spotId)
        editedSpot.name = name,
        editedSpot.location = location,
        editedSpot.price = price,
        editedSpot.description = description

    await editedSpot.save();
    return res.json({editedSpot});
}));

// ====== delete a spot =========================
// ==============================================
router.delete('/:id', asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10);

    // ====== delete associated bookings =======
    // const deadBookings = await Booking.findAll({where: { spot: spotId }})
    // console.log(deadBookings)
    // deadBookings.forEach((b) => {await b.destroy()});
    
    // ====== delete associated reviews =======
    // const deadReviews = await Review.findAll({where: { spot: spotId }})
    // console.log(deadReviews)
    // deadReviews.forEach((b) => {await b.destroy()})
    
    // ====== delete the spot =======
    const deadSpot = await Spot.findByPk(spotId)
    await deadSpot.destroy()
    console.log(deadSpot)
    return res.json({deadSpot});
}));
router.delete('/:id/bookings', asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10);

    // ====== delete associated bookings =======
    // const deadBookings = await Booking.findAll({where: { spot: spotId }})
    // console.log(deadBookings)
    // deadBookings.forEach((b) => {await b.destroy()});
    
    // ====== delete associated reviews =======
    // const deadReviews = await Review.findAll({where: { spot: spotId }})
    // console.log(deadReviews)
    // deadReviews.forEach((b) => {await b.destroy()})
    
    // ====== delete the spot =======
    const deadSpot = await Spot.findByPk(spotId)
    await deadSpot.destroy()
    console.log(deadSpot)
    return res.json({deadSpot});
}));



module.exports = router;
