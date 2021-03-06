const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Booking, Spot } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();


const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .isLength({ min: 2 })
    .withMessage('Please provide a first name with at least 2 characters.'),
  check('firstName')
    .not()
    .isEmail()
    .withMessage('First name cannot be an email.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .isLength({ min: 2 })
    .withMessage('Please provide a first name with at least 2 characters.'),
  check('lastName')
    .not()
    .isEmail()
    .withMessage('Last name cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// ==== sign up a new user ===================
router.post( '/', validateSignup, asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.signup({ email, password, firstName, lastName});
    
    await setTokenCookie(res, user);
    
    return res.json({user});
  }),
  );
  
  
// ==== get a user ===================
router.get('/:id', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params, 10);
  const user = await User.findByPk(userId)
  return res.json({ user });
}));


// ====== get all the users bookings =======
router.get('/:userId/bookings', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const allSpotBookings = await Booking.findAll({
        where: { guest: userId }
    });
    return res.json(allSpotBookings);
}));

// ====== get all the users hosted spots =======
router.get('/:userId/spots', asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const allHostedSpots = await Spot.findAll({
        where: { host: userId }
    });
    return res.json(allHostedSpots);
}));


// router.get( '/:id/please', asyncHandler(async (req, res) => {
//   // const userId = parseInt(req.params, 10);
//   // console.log(userId, "<======= userId ======");
//   const user = await User.FindByPk(1);
//   console.log('hello')
//   console.log(user)
//   return res.json({ user });
// }));


module.exports = router;