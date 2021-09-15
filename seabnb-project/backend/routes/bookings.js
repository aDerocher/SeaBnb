const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking } = require('../db/models');


const router = express.Router();

// ====== post a new booking to the database =======
  router.post('/bookings', asyncHandler(async (req, res) => {
    const { guest, spot, checkIn, checkOut } = req.body;
    const newBooking = await Booking.create({ 
      guest, 
      spot, 
      checkIn, 
      checkOut
    });
    res.status(204).send();
  }));

module.exports = router;
