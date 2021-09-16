import React, { useEffect, useState } from 'react';
// import { Route } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneSpot, getSpots } from "../../store/spots";
import { getSpotBookings } from "../../store/bookings";
import { deleteReview, getSpotReviews } from "../../store/reviews";
import { useParams } from 'react-router-dom';
import ReserveSpotForm from '../ReserveSpotForm';
import ReviewSpotForm from '../ReviewSpotForm';
import './SpotPage.css';
import { isBefore } from 'date-fns';
// import { useHistory } from 'react-router';

function SpotPage(){
  const { spotId } = useParams();
  const dispatch = useDispatch();

  const [ revAbility, setRevAbility ] = useState(false);
  const [ revCount, setRevCount ] = useState(0);
  // dont do this -> const [ spotReviewsArr, setSpotReviewsArr ] = useState([]);


  useEffect(()=>{
    dispatch(getSpots());
    dispatch(getOneSpot(spotId));
    dispatch(getSpotBookings(spotId));
    dispatch(getSpotReviews(spotId));
    setRevAbility(userCanReview());
    console.log(spotId, "......spotId.........")
    console.log(revAbility, '<=======spotId=====');
  }, [ dispatch, spotId, revAbility, revCount ]);

  
  let spot = useSelector(state => state.spots.spotsObj[spotId] );
  let user = useSelector(state => state.session.user );
  let spotBookings = useSelector(state => state.bookings.spotBookings );
  let spotReviewsArr = useSelector(state => state.spots.spot.spotReviews );
  // console.log(isBefore(new Date(booking.checkOut), new Date()), '<===== date thing')
  
  const delRev = (e,revId) => { 
    e.preventDefault();
    setRevCount(revCount-1)
    dispatch(deleteReview(revId));
    dispatch(getSpotReviews(spotId));
  }

  const userCanReview = () => {
    for (let i=0; i < spotReviewsArr?.length || 0; i++ ){
      let spotRev = spotReviewsArr[0];
      if (spotRev.guest === user.id){
        setRevAbility(false);
        return
      }
    }
    
    for(let booking in spotBookings){
      // console.log(new Date(spotBookings[booking].checkIn),new Date(spotBookings[booking].checkOut), new Date())
      // console.log(isBefore(new Date(spotBookings[booking].checkOut), new Date()))
      if (booking.guest === user.id &&
        isBefore(new Date(spotBookings[booking].checkOut), new Date())){
          setRevAbility(true);
        }
      }
    setRevCount(spotReviewsArr?.length);
    setRevAbility(false)
    return;
  }

  if(!spot){
    return <p>Cant load spot</p>
  }

  return(
    <div className="spot-container">
      <div className="spot-top">
        <h2>{spot?.name}</h2>
        <p>=rating= =numOfReviews=<span> · </span>{spot.location}</p>
      </div>
      <div className="spot-images-container">
        <div className="spot-image-l">
          <img src={spot.photo1} alt="boat-1"/>
        </div>
        <div className="spot-images-right">
          <div className="spot-image-r"><img src={spot.photo2} alt="boat-2"/></div>
          <div className="spot-image-r"><img src={spot.photo3} alt="boat-3"/></div>
          <div className="spot-image-r"><img src={spot.photo4} alt="boat-4"/></div>
          <div className="spot-image-r"><img src={spot.photo5} alt="boat-5"/></div>
        </div>
      </div>
      <div className="spot-main">
        <div className="spot-details">
          <p>{spot.description}</p>
        </div>
        <ReserveSpotForm spotId={spotId}/>
      </div>



      <div value={revAbility}>
        <ReviewSpotForm spotId={spot.id} userId={user.id} />
      </div>



      <div className="spot-reviews">
        <p> These are where the reviews will be rendered</p>
        {/* <button onClick={e => userCanReview(e)}>bbb</button>  */}
        {spotReviewsArr?.map((review)=> (
          <div className="review-card">
            <p>{review.score}</p>
            <p>{review.content}</p>
            <button onClick={e=>delRev(e,review.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpotPage;