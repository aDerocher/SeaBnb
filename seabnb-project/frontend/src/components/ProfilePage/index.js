import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { restoreUser } from '../../store/session';
import { getSpots } from '../../store/spots';
import { deleteBooking, getUserBookings } from '../../store/bookings';
import { useSelector, useDispatch} from 'react-redux';
import './ProfilePage.css';
import { format, isBefore } from 'date-fns'

function ProfilePage(){
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user );
    const usersBookings = useSelector(state => state.bookings );
    const spots = useSelector(state => state.spots );

    const [ delBookingId, setDelBookingId ] = useState();

    useEffect(()=>{
        dispatch(getUserBookings(sessionUser?.id));
        dispatch(getSpots())
    }, [ dispatch, sessionUser]);

    
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
    }
    
    const today = new Date()
    let spotObj = {}
    spots?.forEach((spot) => {
        spotObj[`${spot.id}`] = spot
    })


    return(
    <>
      <div className='trips-title'>
          <div className='flex-row-cont'>
            <h2 className='title-text active-title'>Trips</h2>
            <Link style={{textDecoration:'none'}} to={`/users/${sessionUser.id}/becomeahost`}><h2 className='title-text'>Hosting</h2></Link>
          </div>
      </div>
      <div className='subtitle-container'>  
        <p className='subtitle'>Upcoming</p>
      </div>
      <form method='/api/bookings' 
        action="DELETE" 
        onSubmit={e => cancelReservation(e)}
        className='trips-section' 
      >
        
        {usersBookings?.map((booking) => (
            <>
            {isBefore(today, new Date(booking.checkOut)) &&
                <div className="tripCard" key={booking?.id}>
                    <div className="tripCard-img-section hover-hand" onClick={e=> goToSpot(e, booking.spot)}>
                        <img src={spotObj[`${booking.spot}`]?.photo1} alt="boat" />
                    </div>

                    <div className="content-container">
                    <div className="content-section">
                        <p className="ship-name"><a href={`/spots/${booking.spot}`}>{spotObj[`${booking.spot}`]?.name}</a></p>
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
            }
            </>
        ))}
      </form>

      <div className='subtitle-container'>  
          <p className='subtitle'>Past</p>
        </div>
      <div className='trips-section'>
        
          {usersBookings?.map((booking) => (
            <>
            {!isBefore(today, new Date(booking.checkOut)) &&
                <div className="tripCard" key={booking?.id}>
                    <div className="tripCard-img-section hover-hand" onClick={e=> goToSpot(e, booking.spot)}>
                        <img src={spotObj[`${booking.spot}`]?.photo1} alt="boat" />
                    </div>

                    <div className="content-container">
                    <div className="content-section">
                        <p className="ship-name"><a href={`/spots/${booking.spot}`}>{spotObj[`${booking.spot}`]?.name}</a></p>
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
            }
            </>
        ))}
      </div>

      <div className='trips-section'>
      </div>
    </>
  )
}

export default ProfilePage;