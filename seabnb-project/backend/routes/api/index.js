const router = require('express').Router();



const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
// const spotsRouter = require('../spots.js')


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
// router.use('/spots', spotsRouter);


// test route 1
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});


module.exports = router;