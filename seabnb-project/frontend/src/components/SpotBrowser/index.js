import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSpots, getOneSpot } from "../../store/spots";
import { getSpotBookings } from "../../store/bookings";
import { getSpotReviews } from "../../store/reviews";
import './SpotBrowser.css';
import { useHistory } from 'react-router';

function SpotBrowser(){

  const history = useHistory();
  const goToSpot=(spotId,e)=> {
    e.preventDefault();
    getOneSpot(spotId);
    getSpotBookings(spotId);
    getSpotReviews(spotId);
    history.push(`/spots/${spotId}`);
  }

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getSpots());
  }, [ dispatch ]);

  const spots = useSelector(state => {
    return state.spots.list;
  });

  return(
    <div className='all-spots-container'>
      {/* ++++ top section +++++++++++++++++ */}
      <div className='spots-faux-header'>
        <p>+50 Stays</p>
        <h3>Stays Around The World</h3>
        <ul>
          <li className="faux-filter">Free Cancellation</li>
          <li className="faux-filter">Type of Ship</li>
          <li className="faux-filter">Price</li>
          <li className="faux-filter">Instant Book</li>
          <li className="faux-filter">More Filters</li>
        </ul>
        <p>🏆<span className='bold-statement'>More than 300 people have stayed with us.</span> Average rating: 5 Stars</p>
      </div>

      {/* ++++ List of all available spots +++++ */}
      {spots?.map((spot) => (

      <div key={spot.id} className='single-spot-card hover-hand' onClick={e=>goToSpot(spot?.id,e)}>

        <div className='spot-img-section spot-sec'>
          <img src={spot?.photo1} alt='Yacht' />
        </div>

        <div className='spot-mid-section'>
          <div className='spot-mid-top'>
            <h3 className='spot-section-title'>{spot?.name}</h3>
            <p className='tiny-line'> ______ </p>
            <p className='spot-section-flist'>** bedroom count**</p>
            <p className='spot-section-flist'>** amenities list **</p>
          </div>
          <div className='spot-mid-bot'>
            {/* <button onClick={e => goToSpot(spot.id,e)}>Check it out</button> */}
            <p className='spot-section-rating'>⭐5</p>
          </div>
        </div>

        <div className='spot-right-section spot-sec'>
          <div className='spot-hearts'>
            <p>🤍</p>
          </div>
          
          <p><span>$</span>{spot.price}/night</p>
        </div>

      </div>
      ))}

    </div>
  )
}

export default SpotBrowser;