import React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview, getSpotReviews, newReview } from '../../store/reviews'
import { userCanReview, delRev } from '../SpotPage'
import './ReviewSpotForm.css';

const ReviewSpotForm = ({spotId, userId}) => {
  // console.log(userId, '<=========================================');
  // console.log(spotId, '<=========================================');
  const dispatch = useDispatch();
  const [ score, setScore ] = useState(5);
  const [ content, setContent ] = useState('');
  const [ revCount, setRevCount ] = useState(0);

  useEffect(() => {
 
  }, [score, content]);


  let spotReviewsArr = useSelector(state => state.spots.spot.spotReviews );

  const delRev = (e,revId) => { 
    e.preventDefault();
    setRevCount(revCount-1)
    dispatch(deleteReview(revId));
    dispatch(getSpotReviews(spotId));
  }

  const submitReview = (e) => {
    e.preventDefault();
    console.log(score, content)
    const body = {
      guest: userId,
      spot: spotId,
      score,
      content
    }
    dispatch(newReview(body));
  }

  return (
    <>
      { userId && 
        <form action="/api/reviews/new" method="POST" onSubmit={submitReview}>
          {/* <p>{spotAndUser}</p> */}
          <h2>Review Spot Form</h2>
          <input type="number" min='1' max="5" name="score" value={score} onChange={e => setScore(e.target.value)}/>
          <textarea type="text" name="content" maxLength="225" value={content} onChange={e => setContent(e.target.value)}/>
          <button>Submit Review</button>
        </form>
      }
      <div className="spot-reviews">
        <p>  REVIEWS TOOL REVIEWS RENDER </p>
        {/* <button onClick={e => userCanReview(e)}>bbb</button>  */}
        {spotReviewsArr?.map((review)=> (
          <div className="review-card">
            <p>{review.score}</p>
            <p>{review.content}</p>
            <button onClick={e=>delRev(e,review.id)}>delete</button>
          </div>
        ))}
      </div>
  </>
  )
}

export default ReviewSpotForm;