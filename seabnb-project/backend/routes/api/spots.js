const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot,Booking } = require('../../db/models');

const router = express.Router();

// ====== get all the spots from the database =======
router.get('/', asyncHandler(async (req, res) => {
  const allSpots = await Spot.findAll();
  // const { name, location, price, host, 
  //         description, reviews, rules, amenities, photo1,
  //         photo2, photo3, photo4, photo5, } 
  //        = await Spot.findAll();
  // console.log(allSpots, "<=============ALL SPOTS==============");
  return res.json(allSpots);
}));

// ====== get all the spots from the database =======
router.get('/:id', asyncHandler(async (req, res) => {
  const spotId = parseInt(req.params.id, 10);
  // console.log(spotId, '------------------');
  const oneSpot = await Spot.findByPk(spotId);
  const spotBookings = await Booking.findAll({
    where: {
      spot: spotId
    }
  });
  // console.log(oneSpot, spotBookings, "<======stuff=====");
  return res.json({oneSpot, spotBookings});
}));

module.exports = router;
