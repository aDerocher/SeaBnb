import React, { useEffect } from 'react';
// import { Route } from 'react-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSpots, getOneSpot } from "../../store/spots";
import './SpotPage.css';
// import { useHistory } from 'react-router';

function SpotPage(){

  // const history = useHistory();
  const { spotId } = useParams();

  const dispatch = useDispatch();
  useEffect((spotId)=>{
    // dispatch(getSpots());
    dispatch(getOneSpot(spotId));
  }, [ dispatch ]);

  const spot = useSelector(state => {
    return state;
    
  });

  console.log(spotId,'<==============================')
  console.log(spot,'<==============================')
  // console.log(spots[0].photo1,'<==============================')

  return(
    <div>
      <h2>Spot Page</h2>
    </div>
  )
}

export default SpotPage;