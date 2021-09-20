const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot,Booking,Review } = require('../../db/models');

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
  return res.json({oneSpot, spotBookings, spotReviews});
}));

router.get('/:id/reviews', asyncHandler(async (req, res) => {
  const spotId = parseInt(req.params.id, 10);
  const spotReviews = await Review.findAll({
    where: { spot: spotId }
  });
  return res.json({spotReviews});
}));

module.exports = router;
