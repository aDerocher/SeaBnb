import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSpots, getOneSpot } from "../../store/spots";
import { getSpotBookings } from "../../store/bookings";
import { getSpotReviews } from "../../store/reviews";
import { useHistory } from 'react-router';
import './WelcScrBody.css';
import './_ExploreNearby.css';
import './_LiveNearby.css';
import './_TryHosting.css';

const WelcScrBody =() => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const goToSpot=(spotId,e)=> {
    e.preventDefault();
    getOneSpot(spotId);
    getSpotBookings(spotId);
    getSpotReviews(spotId);
    history.push(`/spots/${spotId}`);
  }
  const goToSpots=(e)=> {
    e.preventDefault();
    history.push(`/spots`);
  }

  const goSignUp=(e)=> {
    e.preventDefault();
    sessionUser ? history.push(`/users/${sessionUser.id}`)
                : history.push(`/signup`);
  }

  useEffect(()=>{
    dispatch(getSpots());
  }, [ dispatch ]);

  const spots = useSelector(state => state.spots.list);
  const eightSpots = spots.slice(0,8);



  return (  
    <>
      {/* ++++ Explore Nearby ++++++++++++++++++++++++++++++++++++++++++*/}
      <div className="main-container w-sec expl-nearby">
        <div className='en-title-container'>
          <h2 className="en-title">Explore The World</h2>
        </div>

        <div className="en-cards-container hover-hand"> 
          {eightSpots?.map((spot)=> (
            <div className='spot-card' key={spot.id} onClick={e=>goToSpot(spot.id,e)}>
              <img className='spot-card-img' src={spot.photo1} alt="img" />
              <div className='en-card-body'>
                <p className='en-card-title'>{spot.name}</p>
                <p className='en-card-title'></p>
                <p>{spot.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* +++ Sail Anywhere (Live Anywhere) +++++++++++++++++++++  */}
      <div className="main-container w-sec live-anywhere">
        <div className='la-title-container'>
          <h2 className="la-title">Sail Anywhere</h2>
        </div>
        <div className="la-cards-container">
          <div className='la-card hover-hand' onClick={e=>goToSpots(e)}>
            <div className='la-card-img tropical'></div>
            <div className='la-card-body'>
              <h4>Tropical</h4>
            </div>
          </div>
          <div className='la-card hover-hand' onClick={e=>goToSpots(e)}>
            <div className='la-card-img sailing'></div>
            <div className='la-card-body'>
              <h4>Sailing</h4>
            </div>
          </div>
          <div className='la-card hover-hand' onClick={e=>goToSpots(e)}>
            <div className='la-card-img mini'></div>
            <div className='la-card-body'>
              <h4>Mini Yachts</h4>
            </div>
          </div>
          <div className='la-card hover-hand' onClick={e=>goToSpots(e)}>
            <div className='la-card-img dog'></div>
            <div className='la-card-body'>
              <h4>Pets Allowed</h4>
            </div>
          </div>
        </div>
      </div>


      {/* +++ Try Hosting +++++++++++++++++++++  */}
      <div className="main-container w-sec try-hosting">
        <div className='th-image-container'>
          <div className='th-card-body'>
            <h4 className='th-title'>Try hosting</h4>
            <p className='th-subtitle'>Unlock new synergetic revenue streams and expand your metaverse</p>
            <button className='th-btn hover-hand' onClick={e=>goSignUp(e)}>Learn More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcScrBody;