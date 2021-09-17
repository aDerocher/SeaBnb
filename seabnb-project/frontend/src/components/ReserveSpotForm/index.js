import React from "react";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { today, tomorrow } from './dateUtils';
import { isBefore } from 'date-fns'
import * as sessionActions from '../../store/bookings';
import * as spotSessionActions from '../../store/spots';
// import { format } from 'date-fns'
const ReserveSpotForm = ({spotId}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const { spotId } = useParams();
  const spot = useSelector(state => state.spots.spot.oneSpot );
  const user = useSelector(state => state.session.user );

  let day = today();
  let morrow = tomorrow();
  const [ startDate, setStartDate ] = useState(day);
  const [ endDate, setEndDate ] = useState(morrow);
  const [ errors, setErrors ] = useState([]);

  useEffect(()=>{
    dispatch(sessionActions.getAllBookings());
    dispatch(sessionActions.getSpotBookings(spotId));
    dispatch(spotSessionActions.getSpots());
  }, [spotId]);

  useEffect(()=> {
    let newErrors = [];
    if (!startDate) newErrors.push('Reservations can not be made in the past!');
    if (!endDate) newErrors.push('Reservations can not be made in the past!');
    if (!isBefore(new Date(startDate), new Date(endDate))) newErrors.push('Start date can not be after end date')
    // console.log(isBefore(new Date(startDate), new Date(endDate)));
    setErrors(newErrors);
  }, [ startDate, endDate ])
  const submitReservation = (e) => {
    e.preventDefault();
    const body ={
      guest:user.id,
      spot:spot.id,
      checkIn:new Date(startDate),
      checkOut:new Date(endDate)
    }
    // console.log('form: ', body);
    dispatch(sessionActions.newBooking(body))
    setErrors([]);
  
    history.push('/');
  }

  return(
    <div>
      <form action="/api/bookings/new" method="POST" className="new-booking-form" onSubmit={e=>submitReservation(e)}>
        <input type="date" name="checkIn" min={day} value={startDate} onChange={e=> setStartDate(e.target.value)}></input>
        <input type="date" name="checkOut" min={startDate} value={endDate} onChange={e=> setEndDate(e.target.value)}></input>          
        <button disabled={errors.length > 0}>Reserve</button>
      </form>
    </div>
  )
}

export default ReserveSpotForm;












