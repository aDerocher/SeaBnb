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
    
    const spot = useSelector(state => state.spots[0] );
    const sessionUser = useSelector(state => state.session.user );
    const spotBookings = useSelector(state => state.bookings );
    const reviews = useSelector(state => state.reviews);
    
    const [ revAbility, setRevAbility ] = useState(false);
    const [ spotAverageScore, setSpotAverageScore ] = useState(5);
    
    useEffect(()=>{
        dispatch(getOneSpot(spotId));
        dispatch(getSpotBookings(spotId));
        dispatch(getSpotReviews(spotId));
            
        if(sessionUser) setRevAbility(userCanReview());
    }, [ dispatch, spotId, revAbility ]);

    useEffect(()=>{
        let newAvgScore = 0;
        console.log(reviews?.length)
        reviews?.forEach((r) => {
            newAvgScore += r.score
        })
        console.log(parseInt(newAvgScore), '= total scores')
        console.log(reviews.length, '= num of reviews')
        newAvgScore /= reviews.length
        console.log(newAvgScore, '= new average')
        console.log(Math.round(newAvgScore), '= new average rounded')
        setSpotAverageScore(Math.round(newAvgScore))
    }, [dispatch, reviews])



  // am able to leave reviews on ships i haev not booked
  const userCanReview = () => {
    for (let i=0; i < reviews?.length; i++ ){
      let spotRev = reviews[i];
      if (spotRev.guest === sessionUser.id){
        setRevAbility(false);
        return
      }
    }
    
    for(let booking in spotBookings){
      if (booking.guest === sessionUser?.id &&
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
          <p>⭐{spotAverageScore}<span> · </span>{reviews.length} Reviews<span> · </span>{spot?.location}</p>
          {/* <p>⇯ <a href="#" className='dead-link'>share</a> <span> · </span>♡ <a href="#" className='dead-link'>save</a></p> */}
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
          {sessionUser && 
            <ReserveSpotForm reviewsCount={reviews.length} spotId={spotId} />
          }
          {!sessionUser && 
            <h2></h2>
          }
        </div>
      </div>  

      <ReviewSpotForm spotId={spot?.id} userId={sessionUser?.id}/>

    </div>
  )
}

export default SpotPage;