import React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editReview, deleteReview, getSpotReviews, newReview } from '../../store/reviews'
import './ReviewSpotForm.css';
import { isBefore } from 'date-fns';

const ReviewSpotForm = ({spotId, userId}) => {
  // console.log(userId, '<=========================================');
  // console.log(spotId, '<=========================================');
  const dispatch = useDispatch();
  const [ score, setScore ] = useState(5);
  const [ content, setContent ] = useState('');
  const [ revCount, setRevCount ] = useState(0);
  const [ revAbility, setRevAbility ] = useState(false);

  let spotBookings = useSelector(state => state.bookings.spotBookings );
  let spotReviewsArr = useSelector(state => state.spots.spot.spotReviews );
  
  const userCanLeaveReview = (userId) => {
    for(let i=0; i < spotReviewsArr?.length; i++){
      if (spotReviewsArr[i].guest === userId){
        setRevAbility(false);
        return
      }
    }
    for(let booking in spotBookings){
      // console.log(new Date(spotBookings[booking].checkIn),new Date(spotBookings[booking].checkOut), new Date())
      // console.log(isBefore(new Date(spotBookings[booking].checkOut), new Date()))
      if (booking.guest === userId &&
          isBefore(new Date(spotBookings[booking].checkOut), new Date())){
          setRevAbility(true);
      }
    }
    setRevAbility(false);
    return
  }

  useEffect(() => {
    userCanLeaveReview() ? console.log('hi') : console.log('no')
  }, [score, content]);
  


  const delRev = (e,revId) => { 
    e.preventDefault();
    setRevCount(revCount-1)
    dispatch(deleteReview(revId));
    dispatch(getSpotReviews(spotId));
  }
  const editRev = (e,revId) => { 
    e.preventDefault();
    dispatch(editReview(revId));
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
      { revAbility && 
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
            <p>Guest: {review.guest}</p>
            <p>Rated: {review.score} /5</p>
            <p>{review.content}</p>
            <div>
              <button hidden={!(userId===review.guest)} onClick={e=>delRev(e,review.id)}>delete</button>
              <button hidden={!(userId===review.guest)} onClick={e=>editRev(e,review.id)}>edit</button>
            </div>
          </div>
        ))}
      </div>
  </>
  )
}

export default ReviewSpotForm;