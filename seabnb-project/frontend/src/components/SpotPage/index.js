import React, { useEffect, useState } from 'react';
// import { Route } from 'react-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneSpot } from "../../store/spots";
import { getSpotBookings } from "../../store/bookings";
import ReserveSpotForm from '../ReserveSpotForm';
import ReviewSpotForm from '../ReviewSpotForm';
import './SpotPage.css';
import { isBefore } from 'date-fns';
// import { useHistory } from 'react-router';

function SpotPage(){

  const [ revAbility, setRevAbility ] = useState(false);
  const { spotId } = useParams();
  // console.log(spotId, '<=======spotId=====');
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getOneSpot(spotId));
    dispatch(getSpotBookings(spotId))
    setRevAbility(userCanReview());
  }, [ dispatch, spotId, revAbility ]);

  
  
  const spot = useSelector(state => state.spots.spotsObj[spotId] );
  const user = useSelector(state => state.session.user );
  const spotBookings = useSelector(state => state.bookings.spotBookings );
  // console.log(isBefore(new Date(booking.checkOut), new Date()), '<===== date thing')
  
  const userCanReview = () => {
    // e.preventDefault();
    // console.log(spotBookings)
    for(let booking in spotBookings){
      // console.log(new Date(spotBookings[booking].checkIn),new Date(spotBookings[booking].checkOut), new Date())
      // console.log(isBefore(new Date(spotBookings[booking].checkOut), new Date()))
      if (booking.guest === user.id &&
        isBefore(new Date(spotBookings[booking].checkOut), new Date())){
          setRevAbility(true);
        }
      }
      setRevAbility(false)
    }

  return(
    <div className="spot-container">
      <div className="spot-top">
        <h2>{spot.name}</h2>
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
      <div className="spot-reviews">
        <p> These are where the reviews will be rendered</p>
        {/* <button onClick={e => userCanReview(e)}>bbb</button>  */}
        {/* <ReviewSpotForm spotAndUser={spotId, user.Id} /> */}
        <ul>
          <li>Review 1</li>
          <li>Review 2</li>
          <li>Review 3</li>
        </ul>
      </div>
    </div>
  )
}

export default SpotPage;