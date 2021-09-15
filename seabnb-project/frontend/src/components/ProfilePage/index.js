import React, { useEffect } from 'react';
import { restoreUser } from '../../store/session';
import { getSpots } from '../../store/spots';
import { useSelector, useDispatch } from 'react-redux';
import './ProfilePage.css';
import { daysToWeeks, format } from 'date-fns'
// import { useHistory } from 'react-router';

function ProfilePage(){

    
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(restoreUser());
    dispatch(getSpots());
  }, [ dispatch ]);
  
  // the logged in user
  const user = useSelector(state => state.session.user );
  // all objects. all the users bookings
  const allUserBookings = useSelector(state => state.session.userBookings );
  // array of ID's of the spots that the user has bookings for
  const allUserSpotIds = useSelector(state => state.session.userSpots );
  const spotsObj = useSelector(state => state.spots.spotsObj );

  const formatDate = (date) => {
    const day = new Date(date);
    const newDay = format(day,'yyyy-MM-dd');
    return newDay;
  }

  // console.log(spot,'<============spot==============')
  // console.log(spots[0].photo1,'<==============================')

  return(
    <>
      <div>
        <h2>{user.firstName}</h2>
      </div>
      <h2>Trips</h2>
      <div className='trips-section'>
        {allUserBookings.map((booking)=> (
          <div className="tripCard" key={booking.id}>
            <img src={spotsObj[booking.spot].photo1} />
            <div>
              <p>Check-in: {formatDate(booking.checkIn)}</p>
              <p>Check-out: {formatDate(booking.checkOut)}</p>
              <p>{spotsObj[booking.spot].name}</p>
            </div>
            <button>Cancel Trip</button>
          </div>
        ))}
      </div>
      
      <div className='trips-section'>
      </div>

      <div className='trips-section'>
      </div>
    </>
  )
}

export default ProfilePage;