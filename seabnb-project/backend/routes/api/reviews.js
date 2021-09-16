const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot,Booking } = require('../../db/models');

const router = express.Router();

// ====== get all the reviews from the database =======

router.post('/new', asyncHandler(async (req, res) => {
  const { spot, guest, score, content } = req.body;
  const newReview = await Review.create({ 
    spot, 
    guest, 
    score, 
    content
  });
  res.status(204).send();
  }),
);
module.exports = router;
