const express = require('express');
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');
const { Booking } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');

const router = express.Router();

const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors,
];

// === Home =========
router.get( '/', restoreUser, async (req, res) => {
    const { user } = req;
    if (user) {
      const userBookings = await Booking.findAll({
        where: {
          guest: user.id
        }
      })
      return res.json({
        user: user.toSafeObject(),
        userBookings
      });
    } else return res.json({});
  }
);

// === Log in to Home ============
router.post(
  '/',
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;
    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);


// === Log out user session =================
router.delete(
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);


module.exports = router;