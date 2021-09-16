// ===== IMPORTS =================================
import { csrfFetch } from './csrf'
// import { getOneSpot } from './spots';
import {ONE_SPOT} from './spots'

//===== I CANT REMEMBER WHAT THESE ARE CALLED ========

const REVIEW = 'reviews/REVIEW';

// ===== ACTIONS =================================

const reviewNew = newReview => ({
  type: REVIEW,
  newReview,
});

// ===== FUNCTIONS =================================

export const newReview = (reviewData) => async dispatch => {
  const { guest, spot, score, content} = reviewData;
  const response = await csrfFetch(`/api/reviews/new`, {
    method: 'POST',
    body: JSON.stringify({
      guest, 
      spot, 
      score, 
      content
    }), 
  });
  dispatch(reviewNew);
  return response;
};

// ===== INITIAL STATE =================================
const initialState = {
  allReviews:[],
  spotReviews:[]
};

// ===== REDUCER =================================
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEW: {
      // const spotReviews = {};
      // action.spot.spotBookings.forEach(booking => {
      //    spotBookings[booking.id] = booking;
      //  });
      return {
        state
        // ...state,
        // spotBookings: spotBookings,
      };
    }
    default:
      return state;
  }
}

export default reviewsReducer;