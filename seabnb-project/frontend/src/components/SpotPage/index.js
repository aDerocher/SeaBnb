import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneSpot, getSpots } from "../../store/spots";
import { getSpotBookings } from "../../store/bookings";
import { getSpotReviews } from "../../store/reviews";
import { useParams } from 'react-router-dom';
import ReserveSpotForm from '../ReserveSpotForm';
import ReviewSpotForm from '../ReviewSpotForm';
import './SpotPage.css';
import { isBefore } from 'date-fns';


function SpotPage(){
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const [ revAbility, setRevAbility ] = useState(false);
  const [ revCount, setRevCount ] = useState(0);


  useEffect(()=>{
    dispatch(getSpots());
    dispatch(getOneSpot(spotId));
    dispatch(getSpotBookings(spotId));
    dispatch(getSpotReviews(spotId));
    setRevCount(spotReviewsArr?.length)
    if(user) setRevAbility(userCanReview());
  }, [ dispatch, spotId, revAbility, revCount ]);

  
  let spot = useSelector(state => state.spots.spotsObj[spotId] );
  let user = useSelector(state => state.session.user );
  let spotBookings = useSelector(state => state.bookings.spotBookings );
  let spotReviewsArr = useSelector(state => state.spots.spot.spotReviews );


  // am able to leave reviews on ships i haev not booked

  const userCanReview = () => {
    setRevCount(spotReviewsArr?.length)
    for (let i=0; i < spotReviewsArr?.length; i++ ){
      let spotRev = spotReviewsArr[i];
      if (spotRev.guest === user.id){
        setRevAbility(false);
        return
      }
    }
    
    for(let booking in spotBookings){
      console.log(booking.guest)
      console.log(spotBookings[booking].guest)
      if (booking.guest === user?.id &&
        isBefore(new Date(spotBookings[booking].checkOut), new Date())){
          setRevAbility(true);
        }
      }
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
        <div className='spot-top-links'>
          <p>⭐5<span> · </span>{revCount} Reviews<span> · </span>{spot?.location}</p>
          <p>⇯ <a href="#">share</a> <span> · </span>♡ <a href="#">save</a></p>
        </div>
      </div>
      <div className="spot-images-container">
        <div className="spot-image-l">
          <img src={spot?.photo1} alt="boat-1"/>
        </div>
        <div className="spot-images-right">
          <div className="spot-image-r"><img src={spot?.photo2} alt="boat-2"/></div>
          <div className="spot-image-r"><img src={spot?.photo3} alt="boat-3"/></div>
          <div className="spot-image-r"><img src={spot?.photo4} alt="boat-4"/></div>
          <div className="spot-image-r"><img src={spot?.photo5} alt="boat-5"/></div>
        </div>
      </div>

      <div className="spot-main">
 
        <div className="spot-main-left">
          <div className="spot-details">
            <p className='spot-desc'>{spot?.description}</p>
            <p className='light-grey'>10 guests <span> · </span> 3 bedrooms <span> · </span> 5 beds <span> · </span> 2 baths</p>
          </div>

          <div className="fake-section-container">
            <div className="fake-section">
              <div className="fake-icon">
                <p>⌂</p>
              </div>
              <div className="fake-sub-section">
                <p className="fss-top">Entire Ship</p>
                <p className="fss-bottom">You'll have the place to yourself (plus crew)</p>
              </div>
            </div>
            <div className="fake-section">
              <div className="fake-icon">
                <p>✧</p>
              </div>
              <div className="fake-sub-section">
                <p className="fss-top">Enhanced Clean</p>
                <p className="fss-bottom">This host is committed to Seabnb's Enhanced Cleaning Process</p>
              </div>
            </div>
            <div className="fake-section">
              <div className="fake-icon">
                <p>⟎</p>
              </div>
              <div className="fake-sub-section">
                <p className="fss-top">Dockside checkin</p>
                <p className="fss-bottom">Meet up with the captain to set sail</p>
              </div>
            </div>
            <div className="fake-section" >
              <div className="fake-icon">
                <p>⊕</p>
              </div>
              <div className="fake-sub-section">
                <p className="fss-top">Great locations</p>
                <p className="fss-bottom">Can visit any number of fantastic destinations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="spot-main-right">
          {user && 
            <ReserveSpotForm spotId={spotId} />
          }
          {!user && 
            <h2></h2>
          }
        </div>
      </div>  

      <ReviewSpotForm spotId={spot?.id}  userId={user?.id}/>

    </div>
  )
}

export default SpotPage;