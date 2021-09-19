import React, { useEffect, useState } from 'react';
// import { Route } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneSpot, getSpots } from "../../store/spots";
import { getSpotBookings } from "../../store/bookings";
import { getSpotReviews } from "../../store/reviews";
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
    setRevCount(spotReviewsArr?.length)
    if(user) setRevAbility(userCanReview());
    // console.log(spotId, "......spotId.........")
    // console.log(revAbility, '<=======spotId=====');
  }, [ dispatch, spotId, revAbility, revCount ]);

  
  let spot = useSelector(state => state.spots.spotsObj[spotId] );
  let user = useSelector(state => state.session.user );
  let spotBookings = useSelector(state => state.bookings.spotBookings );
  let spotReviewsArr = useSelector(state => state.spots.spot.spotReviews );
  // console.log(isBefore(new Date(booking.checkOut), new Date()), '<===== date thing')
  
  // const delRev = (e,revId) => { 
  //   e.preventDefault();
  //   setRevCount(revCount-1)
  //   dispatch(deleteReview(revId));
  //   dispatch(getSpotReviews(spotId));
  // }

  const userCanReview = () => {
    for (let i=0; i < spotReviewsArr?.length || 0; i++ ){
      setRevCount(spotReviewsArr.length)
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
            <h2>THIS IS A LINK TO SIGN IN/CREATE</h2>
          }
        </div>
      </div>  

      <ReviewSpotForm spotId={spot?.id}  userId={user?.id}/>

    </div>
  )
}

export default SpotPage;