import React from "react";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { today, tomorrow } from './dateUtils';
import { isBefore } from 'date-fns'
import * as sessionActions from '../../store/bookings';

const ReserveSpotForm = ({spotId}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const { spotId } = useParams();
  const spot = useSelector(state => state.spots.spot );
  const user = useSelector(state => state.session.user );

  let day = today();
  let morrow = tomorrow();
  const [ startDate, setStartDate ] = useState(day);
  const [ endDate, setEndDate ] = useState(morrow);
  const [ errors, setErrors ] = useState([]);

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
      guest:user,
      spot:spot,
      checkIn:startDate,
      checkOut:endDate
    }
    dispatch(sessionActions.newBooking(body))
    console.log('form: ', body);
    setErrors([]);
  
    history.push('/');
  }
  // --- copied from other submission. EDIT ----------
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setErrors([]);
  //   if (password === confirmPassword) {
  //     setErrors([]);
  //     return dispatch(sessionActions.signup({ email, firstName, lastName, password, confirmPassword }))
  //     .catch(async (res) => {
  //         const data = await res.json();
  //         if (data && data.errors) setErrors(data.errors);
  //       });
  //   }
  //   return setErrors(['Confirm Password field must be the same as the Password field']);
  // }


  const logDates = (e) =>{
    e.preventDefault();
    // console.log('trooth: ', isBefore(new Date(startDate), new Date(endDate)));
    dispatch(sessionActions.getAllBookings())
    dispatch(sessionActions.getSpotBookings())
    setErrors([])
  }

  return(
    <div>
      <form action="/api/bookings/new" method="POST" className="new-booking-form" onSubmit={e=>submitReservation(e)}>
        <input type="date" name="checkIn" min={day} value={startDate} onChange={e=> setStartDate(e.target.value)}></input>
        <input type="date" name="checkOut" min={startDate} value={endDate} onChange={e=> setEndDate(e.target.value)}></input>          
        <button disabled={errors.length > 0}>Reserve</button>
        <button onClick={e => logDates(e)}>Console Log Dates</button>
      </form>
    </div>
  )
}

export default ReserveSpotForm;












