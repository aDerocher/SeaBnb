import React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { newReview } from '../../store/reviews'

import './ReviewSpotForm.css';

const ReviewSpotForm = ({spotId, userId}) => {
  // console.log(userId, '<=========================================');
  // console.log(spotId, '<=========================================');
  const dispatch = useDispatch();
  const [ score, setScore ] = useState(5);
  const [ content, setContent ] = useState('');

  useEffect(() => {
 
  }, [score, content]);

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
      <form action="/api/reviews/new" method="POST" onSubmit={submitReview}>
        {/* <p>{spotAndUser}</p> */}
        <h2>Review Spot Form</h2>
        <input type="number" min='1' max="5" name="score" value={score} onChange={e => setScore(e.target.value)}/>
        <textarea type="text" name="content" maxlength="225" value={content} onChange={e => setContent(e.target.value)}/>
        <button>Submit Review</button>
      </form>
    </>
  )
}

export default ReviewSpotForm;