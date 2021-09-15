import React, { useEffect } from 'react';
// import { Route } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSpots } from "../../store/spots";
import './SpotBrowser.css';
import { useHistory } from 'react-router';

function SpotBrowser(){

  const history = useHistory();
  const goToSpot= (spotId)=> {
    history.push(`/api/spots/${spotId}`);
  }

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSpots());
  }, [ dispatch ]);

  const spots = useSelector(state => {
    return state.spots.list;
  });
  // console.log(spots,'<==============================')
  // console.log(spots[0].photo1,'<==============================')

  return(
    <div >
      {/* ++++ top section +++++++++++++++++ */}
      <div className='spots-header'>
        The Header content will go here
      </div>

      {/* ++++ List of all available spots +++++ */}
      {spots.map((spot) => (
      <main key={spot.id} className='spots-container'>
        <div className='spots'>
          <div className='spot'>
            <div className='spot-img-section spot-sec'>
            {/* // style={`background-image:url('${spot.photo1}')`}> */}
              <img src={spot.photo1} alt='Yacht' />
            </div>
            <div className='spot-mid-section spot-sec'>
              <h3 className='spot-section-title'>{spot.name}</h3>
              <p className='tiny-line'> ______ </p>
              <p className='spot-section-flist'>***bedrooms***</p>
              <p className='spot-section-flist'>***3 amenities***</p>
              <button onClick={e => goToSpot(spot.id)}>Check it out</button>
              <p className='spot-section-rating'>⭐ **Rating** </p>
            </div>
            <div className='spot-right-section spot-sec'>
              <div className='spot-hearts'>
                <p>💙</p>
                <p>🤍</p>
              </div>
              <p><span>$</span>{spot.price}/night</p>
            </div>
          </div>
        </div>
      </main>
      ))}

    </div>
  )
}

export default SpotBrowser;