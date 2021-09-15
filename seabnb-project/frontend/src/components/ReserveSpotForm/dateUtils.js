import { areIntervalsOverlapping } from 'date-fns'
import { format } from 'date-fns'
import { addDays } from 'date-fns'
import { isBefore } from 'date-fns'



export const today = () => {
  const day = format(new Date(),'yyyy-MM-dd');
  return day;
}
export const tomorrow = () => {
  let day = new Date();
  let morrow = addDays(day, 1);
  let tomorrow = format(morrow,'yyyy-MM-dd')
  return tomorrow
}

// export const startBeforeEnd = (s, e) => {
//   let isOk = isBefore(newS,newE)
//   return isOk
// }

export const datesOverlap = (booking, newBooking) => {
  const overlap = areIntervalsOverlapping(
    { start:booking.checkIn , end: booking.checkOut },
    { start: newBooking.checkIn, end: newBooking.checkOut}
  )
  console.log(overlap);
  return overlap;
}


const bookingValidator = (spotId) => {
  // all bookings = all of the bookings with this spotId
  // for each booking in bookings: datesOverlap === false? book
                                            // : return error
}
