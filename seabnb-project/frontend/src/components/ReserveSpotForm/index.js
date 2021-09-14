import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";

const ReserveSpotForm = () => {

  const [ startDate, setStartDate ] = useState('')
  const [ endDate, setEndDate ] = useState('')
  const history = useHistory();

  const submitReservation = () => {
    
    // const {  }
    
    history.push('/');
  }

  return(
    <div>
      <form className="" onSubmit={submitReservation}>
        <input type="date" name="checkIn"></input>
        <input type="date" name="checkOut"></input>          
        <button>Reserve</button>
      </form>
    </div>
  )
}

export default ReserveSpotForm;



console.log(2000-01-02 > 2000-1-1) // false
console.log(2000-01-02 === 2000-01-02) // true
console.log(2001-01-02 > 2000-9-9) // true

console.log(2000-9-9 > 1999-1-1) // false
console.log(2000-01-02 > 2000-)


const dateControl1 = ());
const dateControl2 = 1999-1-1;












