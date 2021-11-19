import React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editReview, deleteReview, getSpotReviews, newReview } from '../../store/reviews'
import './ReviewSpotForm.css';
import { isBefore } from 'date-fns';

const ReviewSpotForm = ({spotId, userId}) => {

    const sessionUser = useSelector(state => state.session.user)

  const dispatch = useDispatch();
  const [ score, setScore ] = useState(5);
  const [ content, setContent ] = useState('');
  const [ editScore, setEditScore ] = useState(5);
  const [ editContent, setEditContent ] = useState('');
  const [ revAbility, setRevAbility ] = useState(true);
  const [ editFormHidden, setEditFormHidden ] = useState(true);
  const [ editRevId, setEditRevId ] = useState();
  const [ delRevId, setDelRevId ] = useState();

  let userBookingsArr = useSelector(state => state.session.userBookings )
  let spotReviewsArr = useSelector(state => state.reviews );
  


  const userCanLeaveReview = (userId) => {
    // if a review already exists from this user ==> user cant review
    for(let i=0; i < spotReviewsArr?.length; i++){
      if (spotReviewsArr[i].guest === userId){
        setRevAbility(false);
        return
      }
    }
    // if user has stayed here in the past ==> user can review
    for(let i=0; i < userBookingsArr?.length; i++){
      if (userBookingsArr[i].spot === spotId &&
          isBefore(new Date(userBookingsArr[i].checkOut), new Date())){
          setRevAbility(true);
          return
      }
    }
    setRevAbility(false);
    return
  }

  const delRev = (e,revId) => { 
      e.preventDefault();
      let rev = document.getElementById(revId)
      rev.setAttribute("style", "display: none")
      dispatch(deleteReview(revId));
  }

  useEffect(() => {
    userCanLeaveReview(userId);
  }, [ revAbility, spotReviewsArr])

    const handleShowEdit = (e, content, score) => {
        e.preventDefault();
        setEditFormHidden(!editFormHidden)
        setEditContent(content)
        setEditScore(score)
    }

  const editRev = (e, reviewId) => { 
    e.preventDefault();
    const body = {
      revId: reviewId,
      guest: sessionUser.id,
      spot: spotId,
      score: editScore,
      content: editContent
    }
    dispatch(editReview(body));
    setEditFormHidden(!editFormHidden)
  }

  const submitReview = (e) => {
    e.preventDefault();
    setRevAbility(false)
    const body = {
        guest: userId,
        spot: spotId,
        score,
        content
    }
    dispatch(newReview(body));
  }

    return (
        <div className='reviews-section-container'>
            <p className='reviews-title'>{spotReviewsArr?.length} Reviews</p>
            { revAbility && 
                <form action="/api/reviews/new" method="POST" onSubmit={submitReview} id="revForm">
                    <h2>Leave a review:</h2>
                    <input type="number" min='1' max="5" name="score" value={score} onChange={e => setScore(e.target.value)}/>
                    <textarea 
                    type="text" name="content" maxLength="225" value={content} rows="9" cols="80"
                    onChange={e => setContent(e.target.value)}/>
                    <button className="rev-btn sub-rev-btn">Submit Review</button>
                </form>
            }

      {/* <form hidden={hideEditForm} onSubmit={e=>editRev(e)}>
        <h4></h4>
        <input type="number" min='1' max="5" name="edit-score" value={editScore} onChange={e => setEditScore(e.target.value)}/>
        <textarea type="text" name="edit-content" maxLength="225" value={editContent} onChange={e => setEditContent(e.target.value)}/>
        <button>Submit Changes</button>
      </form> */}
        
            <div className="spot-reviews-container">
                {spotReviewsArr?.map((review)=> (
                    <div key={review.guest} className="review-card" id={review.id}>
                        {(editFormHidden || sessionUser.id!==review.guest) &&
                            <>
                                <div className="review-card-top">
                                    <div className="faux-prof-pic">
                                    </div>
                                    <div className="review-card-top-right">
                                        <div><p>Guest: {review.guest}</p></div>
                                        <div><p>Rated: {review.score} /5</p></div>
                                    </div>
                                </div>
                                <p>{review.content}</p>
                            </>
                        }
                        {(!editFormHidden && userId===review.guest) &&
                            <div className='edit-rev-form-container'>
                                <h4>Edit Review</h4>
                                <form onSubmit={e=>editRev(e, review.id)} className='edit-rev-form'>
                                    <h4></h4>
                                    <input type="number" min='1' max="5" name="edit-score" value={editScore} onChange={e => setEditScore(e.target.value)} className='edit-rev-score edit-rev-form-item'/>
                                    <textarea type="text" name="edit-content" maxLength="225" rows='5' cols='50' value={editContent} onChange={e => setEditContent(e.target.value)} className='edit-rev-content edit-rev-form-item'/>
                                </form>
                                <div className='edit-rev-form-buttons-container'>
                                    <button className='rev-btn edit-rev-subbtn' onClick={e=>editRev(e, review.id)}>Submit</button>
                                    <button className="rev-btn rev-edit-btn" hidden={!(userId===review.guest)} onClick={e => handleShowEdit(e, review.content, review.score)}>cancel</button>
                                </div>
                            </div>
                        }
                        
                        {(editFormHidden && userId===review.guest) &&
                            <>
                                <button className="rev-btn rev-del-btn edit-rev-form-item" hidden={!(userId===review.guest)} onClick={e=>delRev(e,review.id)}>delete</button>
                                <button className="rev-btn rev-edit-btn" hidden={!(userId===review.guest)} onClick={e => handleShowEdit(e, review.content, review.score)}>edit</button>
                            </>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewSpotForm;