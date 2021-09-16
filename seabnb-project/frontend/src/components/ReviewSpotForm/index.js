import React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './ReviewSpotForm.css';

const ReviewSpotForm = () => {
  const dispatch = useDispatch();
  const [ score, setScore ] = useState(5);
  const [ content, setContent ] = useState('');

  useEffect(() => {
    setScore();
    setContent();
  }, [score, content])

  const submitReview = (e) => {
    e.preventDefault();
    const body = {
      guest: 1,
      spot: 1,
      score,
      content
    }
    dispatch()
  }

  return (
    <>
      <form action="" method="POST" onSubmit={submitReview}>
        <h2>Review Spot Form</h2>
        <input type="number" min='1' max="5" name="score" value={score} onChange={e => setScore(e.target.value)}/>
        <textarea type="text" name="content" maxlength="225" value={content} onChange={e => setContent(e.target.value)}/>
        <button>Submit Review</button>
      </form>
    </>
  )
}

export default ReviewSpotForm;