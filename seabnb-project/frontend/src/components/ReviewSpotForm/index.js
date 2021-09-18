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
  const [ editScore, setEditScore ] = useState(5);
  const [ editContent, setEditContent ] = useState('');
  const [ revCount, setRevCount ] = useState(0);
  const [ revAbility, setRevAbility ] = useState(true);
  const [ hideEditForm, setHideEditForm ] = useState(true);
  const [ editRevId, setEditRevId ] = useState();

  let userBookingsArr = useSelector(state => state.session.userBookings )
  let spotBookings = useSelector(state => state.bookings.spotBookings );
  let spotReviewsArr = useSelector(state => state.spots.spot.spotReviews );
  


  const userCanLeaveReview = (userId) => {
    // if a review already exists from this user ==> user cant review
    for(let i=0; i < spotReviewsArr?.length; i++){
      if (spotReviewsArr[i].guest === userId){
        console.log(spotReviewsArr[i].guest, userId, "p1============")
        setRevAbility(false);
        return
      }
    }
    // if user has stayed here in the past ==> user cant review
    for(let i=0; i < userBookingsArr?.length; i++){
      // console.log(new Date(spotBookings[booking].checkIn),new Date(spotBookings[booking].checkOut), new Date())
      // console.log(isBefore(new Date(spotBookings[booking].checkOut), new Date()))
      if (userBookingsArr[i].guest === userId &&
          isBefore(new Date(userBookingsArr[i].checkOut), new Date())){
          console.log(isBefore(new Date(userBookingsArr[i].checkOut), new Date()), "p2============")
          setRevAbility(true);
          return
      }
    }
    setRevAbility(false);
    return
  }

 const delRev = (e,revId) => { 
    e.preventDefault();
    dispatch(deleteReview(revId));
    dispatch(getSpotReviews(spotId));
    let x = revCount
    setRevCount(x-1);
}

  useEffect(() => {
    userCanLeaveReview(userId);
  }, [revCount, revAbility, spotReviewsArr])


  const editRev = (e) => { 
    e.preventDefault();
    const body = {
      revId: editRevId,
      guest: userId,
      spot: spotId,
      score,
      content
    }
    setRevCount(revCount-1);
    dispatch(editReview(body));
    dispatch(getSpotReviews(spotId));
  }
  const showEditForm = (e) => { 
    e.preventDefault();
    setHideEditForm(!hideEditForm);
  }

  const submitReview = (e) => {
    e.preventDefault();
    // console.log(score, content)
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
          <h2>Review Spot Form</h2>
          <input type="number" min='1' max="5" name="score" value={score} onChange={e => setScore(e.target.value)}/>
          <textarea type="text" name="content" maxLength="225" value={content} onChange={e => setContent(e.target.value)}/>
          <button>Submit Review</button>
        </form>
      }

      <form hidden={hideEditForm} onSubmit={e=>editRev(e)}>
        <h4></h4>
        <input type="number" min='1' max="5" name="edit-score" value={editScore} onChange={e => setEditScore(e.target.value)}/>
        <textarea type="text" name="edit-content" maxLength="225" value={editContent} onChange={e => setEditContent(e.target.value)}/>
        <button>Submit Changes</button>
      </form>

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
              <button hidden={!(userId===review.guest)} onClick={e=>showEditForm(e,setEditRevId(review.id))}>edit</button>
            
            </div>
          </div>
        ))}
      </div>
  </>
  )
}

export default ReviewSpotForm;