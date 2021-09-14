// backend/routes/index.js
const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const spotsRouter = require('./spots');
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});


router.use('/api', apiRouter);
router.use('/spots', spotsRouter);
// ===========================================


router.get('/', function(req, res) {
  console.log('maybe')
  res.json({ requestBody: req.body });
});

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});


// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });
}


// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.json({});
  });
}



module.exports = router;