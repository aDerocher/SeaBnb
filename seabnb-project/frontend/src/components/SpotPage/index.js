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
  console.log(spotId, '<=======spotId=====');
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getOneSpot(spotId));
    dispatch(getSpotBookings(spotId))
  }, [ dispatch, spotId ]);
    
  const spot = useSelector(state => {
    return state.spots.spot;
  });
  // console.log(spotId,'<============spotId=============')
  // console.log(spot,'<============spot==============')
  // console.log(spots[0].photo1,'<==============================')

  return(
    <div>
      <h2>{spot.name}</h2>
      <div className="spot-top"></div>
      <div className="spot-images"></div>
      <div className="spot-main">
        <div className="spot-details"></div>
        <ReserveSpotForm spotId={spotId}/>
      </div>
      <div className="spot-reviews"></div>
    </div>
  )
}

export default SpotPage;