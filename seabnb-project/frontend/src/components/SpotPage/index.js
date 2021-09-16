import React, { useEffect } from 'react';
// import { Route } from 'react-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneSpot } from "../../store/spots";
import { getSpotBookings } from "../../store/bookings";
import ReserveSpotForm from '../ReserveSpotForm';
import './SpotPage.css';
// import { useHistory } from 'react-router';

function SpotPage(){

  // const history = useHistory();
  // const { spotId } = useParams();
  // const dispatch = useDispatch();
  // useEffect((spotId)=>{
    //   dispatch(getSpots());
    //   // dispatch(getOneSpot(spotId));
    // }, [ dispatch ]);
  // const spot = useSelector(state => {
    //   return state;
    // });
  const { spotId } = useParams();
  // console.log(spotId, '<=======spotId=====');
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getOneSpot(spotId));
    dispatch(getSpotBookings(spotId))
  }, [ dispatch, spotId ]);
    
  const spot = useSelector(state => {
    return state.spots.spotsObj[spotId];
  });
  console.log(spot)

  return(
    <div className="spot-container">
      <div className="spot-top">
        <h2>{spot.name}</h2>
        <p>=rating= =numOfReviews=<span> · </span>{spot.location}</p>
      </div>
      <div className="spot-images-container">
        <div className="spot-images-left">
          <div className="spot-image"><img src={spot.photo1}/></div>
        </div>
        <div className="spot-images-right">
          <div className="spot-image"><img src={spot.photo2}/></div>
          <div className="spot-image"><img src={spot.photo3}/></div>
          <div className="spot-image"><img src={spot.photo4}/></div>
          <div className="spot-image"><img src={spot.photo5}/></div>
        </div>
      </div>
      <div className="spot-main">
        <div className="spot-details"></div>
        <ReserveSpotForm spotId={spotId}/>
      </div>
      <div className="spot-reviews"></div>
    </div>
  )
}

export default SpotPage;