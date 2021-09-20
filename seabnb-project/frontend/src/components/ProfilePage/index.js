import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { restoreUser } from '../../store/session';
import { getSpots } from '../../store/spots';
import { deleteBooking } from '../../store/bookings';
import { useSelector, useDispatch} from 'react-redux';
import './ProfilePage.css';
import { format, isBefore } from 'date-fns'

function ProfilePage(){
  const history = useHistory();
  const dispatch = useDispatch();
  const [ delBookingId, setDelBookingId ] = useState();
  const [ tripCount, setTripCount ] = useState(0);
  const allUserBookings = useSelector(state => state.session.userBookings );
  let pastUserBookings = [];
  let futureUserBookings = [];
  for (let i=0; i < allUserBookings?.length; i++){
      let b = allUserBookings[i];
      if (isBefore(new Date(b.checkOut), new Date())){
        pastUserBookings.push(b);
      } else {
        futureUserBookings.push(b);
      }
    }
  useEffect(()=>{
    dispatch(restoreUser());
    dispatch(getSpots());
    setTripCount(allUserBookings?.length); 
  }, [ dispatch, tripCount ]);
  
  const spotsObj = useSelector(state => state.spots.spotsObj );

  const formatDate = (date) => {
    const day = new Date(date);
    const newDay = format(day,'yyyy-MM-dd');
    return newDay;
  }
  const goToSpot=(e, spotId)=>{
    e.preventDefault();
    history.push(`/spots/${spotId}`);
  }
  const cancelReservation = (e) => {
    e.preventDefault();
    dispatch(deleteBooking(delBookingId));
    setTripCount(tripCount-1);
  }


  return(
    <>
      <div className='trips-title'>
        <h2>Trips</h2>
      </div>
      <div className='subtitle-container'>  
        <p className='subtitle'>Upcoming</p>
      </div>
      <form method='/api/bookings' 
        action="DELETE" 
        onSubmit={e => cancelReservation(e)}
        className='trips-section' 
      >
        
        {futureUserBookings?.map((booking) => (
          <div className="tripCard" key={booking?.id}>
            <div className="tripCard-img-section hover-hand" onClick={e=> goToSpot(e, booking.spot)}>
              <img src={spotsObj[booking.spot]?.photo1} alt="boat" />
            </div>

            <div className="content-container">
              <div className="content-section">
                <p className="ship-name"><a href={`/spots/${booking.spot}`}>{spotsObj[booking.spot]?.name}</a></p>
                <div className="check-section-container">
                  <div className="check-section">
                    <p>Check-in:</p>
                    <p>{formatDate(booking?.checkIn)}</p>
                  </div>
                  <div className="check-section">
                    <p>Check-out:</p>
                    <p>{formatDate(booking?.checkOut)}</p>
                  </div>
                </div>
              </div>
              <div className="cancel-container">
                <input type="radio" name="trippy" value={booking?.id} onChange={e => setDelBookingId(e.target.value)}/>
                <button className="cancel-trip-btn hover-hand" >Cancel Trip</button>
              </div>
            </div>
          </div>
        ))}
      </form>

      <div className='subtitle-container'>  
          <p className='subtitle'>Past</p>
        </div>
      <div className='trips-section'>
        
          {pastUserBookings?.map((booking) => (
          <div className="tripCard" key={booking?.id}>
            <div className="tripCard-img-section hover-hand" onClick={e=> goToSpot(e, booking.spot)}>
              <img src={spotsObj[booking.spot]?.photo1} alt="boat" />
            </div>

            <div className="content-container">
              <div className="content-section">
                <p className="ship-name"><a href={`/spots/${booking.spot}`}>{spotsObj[booking.spot]?.name}</a></p>
                <div className="check-section-container">
                  <div className="check-section">
                    <p>Check-in:</p>
                    <p>{formatDate(booking?.checkIn)}</p>
                  </div>
                  <div className="check-section">
                    <p>Check-out:</p>
                    <p>{formatDate(booking?.checkOut)}</p>
                  </div>
                </div>
              </div>
              <div className="cancel-container book-again-container">
                {/* <input type="radio" name="trippy" value={booking?.id} onChange={e => setDelBookingId(e.target.value)}/> */}
                <button className="book-again-btn hover-hand" onClick={e=> goToSpot(e, booking.spot)}>Book it again</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='trips-section'>
      </div>
    </>
  )
}

export default ProfilePage;