import React, { useEffect } from 'react';
// import { Route } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSpots } from "../../store/spots";
import './SpotBrowser.css';

function SpotBrowser(){

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSpots());
  }, [ dispatch ]);

  const spots = useSelector(state => {
    return state.spots.list;
  });
  // console.log(spots,'<==============================')

  return(
    <div>
      <h2>I'm Spot Browser</h2>
      {spots.map((spot) => (
        <p key={spot.id}>{spot.name}</p>
      ))}
    </div>
  )
}

export default SpotBrowser;