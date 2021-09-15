import React from "react";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { today, tomorrow } from './dateUtils';
import { isBefore } from 'date-fns'


const ReserveSpotForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { spotId } = useParams();

  let day = today();
  let morrow = tomorrow();
  const [ startDate, setStartDate ] = useState(day);
  const [ endDate, setEndDate ] = useState(morrow);
  const [ errors, setErrors ] = useState([]);

  // useEffect(()=>{
  //   dispatch(getOneSpot(spotId));
  // }, [ dispatch, spotId ]);
    
  const spot = useSelector(state => state.spots.spot );
  const user = useSelector(state => state.session.user );

  useEffect(()=>{
    setStartDate(day);
  },[])

  useEffect(()=> {
    let newErrors = [];
    if (startDate < today ) newErrors.push('Reservations can not be made in the past!');
    if (!startDate) newErrors.push('Reservations can not be made in the past!');
    if (!endDate) newErrors.push('Reservations can not be made in the past!');
    if (!isBefore(startDate, endDate)) newErrors.push('Start date can not be after end date')
    console.log('Reservations can not be made in the past!');

    setErrors(newErrors);
  }, [ startDate, endDate ])

  const submitReservation = () => {
    
    console.log(startDate, '<===>',endDate)
    const body ={
      guest:user,
      spot:spot,
      checkIn:startDate,
      checkOut:endDate
    }
    console.log('form: ', body)
    history.push('/');
  }

  const logDates = (e) =>{
    e.preventDefault();
    // let result = isBefore(new Date(1928, 6, 10), new Date(1987, 1, 11));
    // console.log(new Date(startDate));
    // console.log('result: ', result);
    console.log('trooth: ', isBefore(new Date(startDate), new Date(endDate)));
    // console.log("start: ", startDate.toLocaleString());
    // console.log("end: ", endDate.toLocaleDateString());
    // console.log("fullDate: ", fullDate)
    // console.log("currDate: ", currDate)
    // console.log("day: ", day)
    // console.log("morrow: ", morrow)
  }

  return(
    <div>
      <form className="" onSubmit={submitReservation}>
        <input type="date" name="checkIn" min={day} value={startDate} onChange={e=> setStartDate(e.target.value)}></input>
        <input type="date" name="checkOut" min={startDate} value={endDate} onChange={e=> setEndDate(e.target.value)}></input>          
        <button disabled={errors.length > 0}>Reserve</button>
        <button onClick={e => logDates(e)}>Console Log Dates</button>
      </form>
    </div>
  )
}

export default ReserveSpotForm;












