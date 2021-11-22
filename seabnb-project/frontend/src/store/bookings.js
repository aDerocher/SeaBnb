// ===== IMPORTS =================================
import { csrfFetch } from './csrf'
// import { getOneSpot } from './spots';
import {ONE_SPOT} from './spots'

//===== I CANT REMEMBER WHAT THESE ARE CALLED ========
const GET_SPOT_BOOKINGS = 'bookings/GET_SPOT_BOOKINGS';
const GET_ALL_BOOKS = 'bookings/GET_ALL_BOOKS';
const NEW_BOOK = 'bookings/NEW_BOOK';
const GET_USER_BOOKS = 'bookings/GET_USER_BOOKS'
// const DELETE_BOOK = 'bookings/DELETE_BOOK'

// ===== ACTIONS =================================
const getOneSpotBooks = (spotBookings) => ({
  type: GET_SPOT_BOOKINGS,
  payload: spotBookings
});
const getAllBooks = (allBookings) => ({
  type: GET_ALL_BOOKS,
  payload: allBookings
});
const bookNew = newBooking => ({
    type: NEW_BOOK,
    payload: newBooking,
});
const getUserBooks = (usersBookings) => ({
  type: GET_USER_BOOKS,
  payload: usersBookings
});

// ===== FUNCTIONS =================================
export const getSpotBookings = (spotId) => async dispatch => {
  // const spot = await fetch(`/bookings/${}`);
  const response = await csrfFetch(`/api/spots/${spotId}/bookings`);
  
  if (response.ok) {
    const spotBookings = await response.json();  
    dispatch(getOneSpotBooks(spotBookings));
  }
};

export const getAllBookings = () => async dispatch => {
  const response = await csrfFetch(`/api/bookings`);
  
  if (response.ok) {
    const allBookings = await response.json();
    dispatch(getAllBooks(allBookings));
  }
};

export const newBooking = (bookingData) => async dispatch => {
    const { guest, spot, checkIn, checkOut} = bookingData
    const response = await csrfFetch(`/api/bookings/new`, {
        method: 'POST',
        body: JSON.stringify({
            guest,
            spot,
            checkIn,
            checkOut
        }), 
    });
    if (response.ok) {
        const newBooking = await response.json();
        dispatch(bookNew(newBooking));
    }
};


export const getUserBookings = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/users/${userId}/bookings`);
  
  if (response.ok) {
    const allBookings = await response.json();
    dispatch(getAllBooks(allBookings));
  }
};

export const deleteBooking = (bookingId) => async dispatch => {
    const response = await csrfFetch(`/api/bookings`, {
    method: 'DELETE',
    body: JSON.stringify({
      bookingId
    }), 
  });
  return response;
}


// ===== INITIAL STATE =================================
const initialState = [];

// ===== REDUCER =================================
const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SPOT_BOOKINGS: {
            return [...action.payload]
        }

        case GET_ALL_BOOKS: {
            return [...action.payload]
        }
        
        case NEW_BOOK: {
            return [...state, action.payload]
        }
        default:
            return state;
    }
}

export default bookingsReducer;