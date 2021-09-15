import { csrfFetch } from './csrf'

// ===== IMPORTS =================================
const GET_BOOKS = 'bookings/GET_BOOKS';
const GET_ALL_BOOKS = 'bookings/GET_ALL_BOOKS';
const BOOK = 'bookings/BOOK';

// ===== ACTIONS =================================
const getBooks = (spotBookings) => ({
  type: GET_BOOKS,
  spotBookings
});
const getAllBooks = (allBookings) => ({
  type: GET_ALL_BOOKS,
  allBookings
});
const bookNew = newBooking => ({
  type: BOOK,
  newBooking,
});

// ===== FUNCTIONS =================================
export const getSpotBookings = (spotId) => async dispatch => {
  // const spot = await fetch(`/bookings/${}`);
  const response = await csrfFetch(`api/bookings`);
  
  if (response.ok) {
    const spotBookings = await response.json();
    console.log(spotBookings, "<<+++ bookings +++")
    dispatch(getBooks(spotBookings));
  }
};

export const getAllBookings = () => async dispatch => {
  const response = await csrfFetch(`api/bookings`);
  
  if (response.ok) {
    const allBookings = await response.json();
    console.log(allBookings, "<<+++ all bookings +++")
    dispatch(getAllBooks(allBookings));
  }
};

export const newBooking = (bookingData) => async dispatch => {
  const { 
      guest,
      spot,
      checkIn,
      checkOut
  } = bookingData
  const response = await fetch(`/bookings/new`, {
    method: 'POST',
    body: JSON.stringify({
      guest,
      spot,
      checkIn,
      checkOut
    }), 
  });
  return response;
};
// export const getOneSpot = (spotId) => async dispatch => {
//   const response = await fetch(`/spots/${spotId}`);
  
//   if (response.ok) {
//     const spot = await response.json();
//     console.log(spot, "<<+++ spot +++")
//     dispatch(oneSpot(spot));
//   }
// };

// ===== SET STATE =================================
const initialState = {
  allBookings: [],
  spotBookings: []
};

// ===== REDUCER =================================
const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS: {
      const spotBookings = {};
      action.spotBookings.forEach(booking => {
        spotBookings[booking.id] = booking;
      });
      return {
        ...state,
        spotBookings: action.spotBookings,
      };
    }
    case GET_ALL_BOOKS: {
      const allBookings = {};
      action.allBookings.forEach(booking => {
        allBookings[booking.id] = booking;
      });
      return {
        ...state,
        allBookings: action.allBookings,
      };
    }
    
    default:
      return state;
  }
}

export default bookingsReducer;