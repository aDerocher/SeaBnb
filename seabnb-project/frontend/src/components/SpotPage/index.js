import React, { useEffect } from 'react';
// import { Route } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSpots } from "../../store/spots";
import './SpotBrowser.css';
import { useHistory } from 'react-router';

function SpotPage(){

  const history = useHistory();
  
  const spots = useSelector(state => {
    return state.spots.list;
  });
  // console.log(spots,'<==============================')
  // console.log(spots[0].photo1,'<==============================')

  return(
    <div>
      <h2>Spot Page</h2>
    </div>
  )
}

export default SpotBrowser;