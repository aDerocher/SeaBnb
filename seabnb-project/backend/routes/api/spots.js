const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot,Booking,Review } = require('../../db/models');
const { multiplePublicFileUpload, multipleMulterUpload } = require('../../awsS3')
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')
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

// ====== create a new spot =======
router.post('/new', asyncHandler(async (req, res) => {
// router.post('/new', multipleMulterUpload("image"), asyncHandler(async (req, res) => {
    // let photos = [];
    // for(let i=1; i <= 5; i++){
        //     let p = req.body.photo[i];
        //     photos.push(p)
    // }
    // const newPhotoLinks = multiplePublicFileUpload(photos);
    const { host,name,location,price,description } = req.body;
    console.log(host,name,location,price,description, '======================================================================================== rb')
    const newSpot = await Spot.create({
        name: name,
        location: location,
        price: price,
        host: host,
        description: description
        // reviews: req.body.reviews,
        // rules: req.body.rules,
        // amenities: req.body.amenities,
        // photo1: newPhotoLinks[0],
        // photo2: newPhotoLinks[1],
        // photo3: newPhotoLinks[2],
        // photo4: newPhotoLinks[3],
        // photo5: newPhotoLinks[4],
    });
    return res.json({newSpot});
}));

// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
// ====== create a new spot FOR TESTING PURPOSES===========================================================================================
router.post('/newsingle', singleMulterUpload("image"), asyncHandler(async (req, res) => {
    // let photos = [];
    // for(let i=1; i <= 5; i++){
    //     let p = req.body.photo[i];
    //     photos.push(p)
    // }
    console.log("hello")
    const {photo} = req.body
    const newPhotoLink = await singlePublicFileUpload(photo);
    console.log(newPhotoLink, '====== 2')
    return res.json({newPhotoLink});
    // const newSpot = await Spot.create({
    //     name: req.body.name,
    //     location: req.body.location,
    //     price: req.body.price,
    //     host: req.body.host,
    //     description: req.body.description,
    //     reviews: req.body.reviews,
    //     rules: req.body.rules,
    //     amenities: req.body.amenities,
    //     photo1: newPhotoLinks[0],
    //     photo2: newPhotoLinks[1],
    //     photo3: newPhotoLinks[2],
    //     photo4: newPhotoLinks[3],
    //     photo5: newPhotoLinks[4],
    // });
    // return res.json({newSpot});
}));


module.exports = router;
