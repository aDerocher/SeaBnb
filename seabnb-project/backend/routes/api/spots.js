const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot } = require('../../db/models');


const router = express.Router();

// ====== get all the spots from the database =======
  router.get('/', asyncHandler(async (req, res) => {
    const allSpots = await Spot.findAll();
    // const { name, location, price, host, 
    //         description, reviews, rules, amenities, photo1,
    //         photo2, photo3, photo4, photo5, } 
    //        = await Spot.findAll();
    
    return res.json(allSpots);
  }),
);

module.exports = router;
