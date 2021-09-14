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
    return state;
  });
  console.log(spots,'<==============================')

  return(
    <div>
      <h2>I'm Spot Browser</h2>
    </div>
  )
}

export default SpotBrowser;