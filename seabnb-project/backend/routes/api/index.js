const router = require('express').Router();

const bookingsRouter = require('./bookings');
const reviewsRouter = require('./reviews.js');
const sessionRouter = require('./session.js');
const spotsRouter = require('./spots');
const usersRouter = require('./users.js');


router.use('/bookings', bookingsRouter);
router.use('/reviews', reviewsRouter);
router.use('/session', sessionRouter);
router.use('/spots', spotsRouter);
router.use('/users', usersRouter);


// test route 1
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});


module.exports = router;