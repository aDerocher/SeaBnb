import React, { useEffect } from 'react';
import { useState } from 'react';
import { restoreUser } from '../../store/session';
import { getSpots } from '../../store/spots';
import { deleteBooking } from '../../store/bookings';
import { useSelector, useDispatch } from 'react-redux';
import './ProfilePage.css';
import { format } from 'date-fns'
// import { useHistory } from 'react-router';

function ProfilePage(){
 
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(restoreUser());
    dispatch(getSpots());
  }, [ dispatch ]);
  
  const [ delBookingId, setDelBookingId ] = useState();

  // the logged in user object
  const user = useSelector(state => state.session.user );
  // array of all the users bookings objects
  const allUserBookings = useSelector(state => state.session.userBookings );
  // array of ID's of the spots that the user has bookings for
  const allUserSpotIds = useSelector(state => state.session.userSpots );
  // object of all spots. keys are the spotId
  const spotsObj = useSelector(state => state.spots.spotsObj );

  const formatDate = (date) => {
    const day = new Date(date);
    const newDay = format(day,'yyyy-MM-dd');
    return newDay;
  }

  const cancelReservation = (e) => {
    e.preventDefault();
    dispatch(deleteBooking(delBookingId));

  }
  // console.log(spot,'<============spot==============')
  // console.log(spots[0].photo1,'<==============================')

  return(
    <>
      <div className='trips-title'>
        <h2>Trips</h2>
      </div>
      <form method='/api/bookings' 
        method="DELETE" 
        onSubmit={e => cancelReservation(e)}
        className='trips-section' 
      >
        {allUserBookings.map((booking)=> (
          <div className="tripCard" key={booking.id}>
            <div className="tripCard-img-section">
              <img src={spotsObj[booking.spot].photo1} />
            </div>
            <div>
              <p>Check-in: {formatDate(booking.checkIn)}</p>
              <p>Check-out: {formatDate(booking.checkOut)}</p>
              <p>{spotsObj[booking.spot].name}</p>
            </div>
            <div className="cancel-container">
              <input type="radio" name="trippy" value={booking.id} onChange={e => setDelBookingId(e.target.value)}/>
              <button className="cancel-trip-btn" >Cancel Trip</button>
            </div>
          </div>
        ))}
      </form>
      
      <div className='trips-section'>
      </div>

      <div className='trips-section'>
      </div>
    </>
  )
}

export default ProfilePage;