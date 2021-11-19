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
  res.json({newReview});
}));

// ====== delete a review from the database =======
router.delete('/', asyncHandler(async (req, res) => {
    const { revId } = req.body;
    const deadReview = await Review.findByPk(revId) 
    await deadReview.destroy()
    //   res.status(204).send();
    return res.json({deadReview});
}));

// ====== edit a review in the database =======
router.patch('/:id', asyncHandler(async (req, res) => {
    let reviewId = parseInt(req.body.revId,10)
//     const updated = await Review.update(
//     {
//       score: req.body.score,
//       content: req.body.content, 
//     }, 
//     {
//       where: { id: reviewId }
//     }
//   )
//   .then((res) => {return res.json({updated})});

    let editedRev = await Review.findByPk(reviewId);
    editedRev.score = req.body.score;
    editedRev.content = req.body.content;
    await editedRev.save();
    return res.json({editedRev});

}));


// ===== export the router
module.exports = router;
