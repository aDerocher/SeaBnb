const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking } = require('../../db/models');


const router = express.Router();

// ====== get all the bookings all spots =======
router.get('/', asyncHandler(async (req, res) => {
  const allBookings = await Booking.findAll();
  return res.json(allBookings);
}));

// ====== post a new booking to the database =======
router.post('/new', asyncHandler(async (req, res) => {
  const { guest, spot, checkIn, checkOut } = req.body;
  const newBooking = await Booking.create({ 
    guest, 
    spot, 
    checkIn, 
    checkOut
  });
  res.status(204).send();
}));

// ====== post a new booking to the database =======
router.delete('/', asyncHandler(async (req, res) => {
  const { bookingId } = req.body;
  const deadBooking = await Booking.findByPk(bookingId);
  await deadBooking.destroy();
  res.status(204).send();
}));


  

module.exports = router;
