const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');

const router = express.Router();


// ====== get all the reviews from the database =======
router.get('/', asyncHandler(async (req, res) => {
  const allReviews = await Review.findAll();
   
  res.status(204).send();
}));


// ====== post a new review to the database =======
router.post('/new', asyncHandler(async (req, res) => {
  const { spot, guest, score, content } = req.body;
  const newReview = await Review.create({ 
    spot, 
    guest, 
    score, 
    content
  });
  res.json(newReview);
}));

// ====== delete a review from the database =======
router.delete('/', asyncHandler(async (req, res) => {
  const { revId } = req.body;
  const deadReview = await Review.findByPk(revId) 
  await deadReview.destroy()
  res.status(204).send();
}));

// ====== edit a review in the database =======
router.put('/:id', asyncHandler(async (req, res) => {
  const { revId, guest, spot, score, content } = req.body;
  // const oldReview = await Review.findByPk(revId);
  await Review.update(
    {
      score,
      content, 
    }, 
    {
      where: { 
        id: revId
      }
    }
  );
  res.status(204).send();
}));


// ===== export the router
module.exports = router;
