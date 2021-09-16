// ===== IMPORTS =================================
import { csrfFetch } from './csrf'
// import { getOneSpot } from './spots';
import {ONE_SPOT} from './spots'

//===== I CANT REMEMBER WHAT THESE ARE CALLED ========
const REVIEW = 'reviews/REVIEW';
const DEL_REVIEW = 'reviews/DEL_REVIEW';
const GET_REVIEWS = 'reviews/GET_REVIEWS';

// ===== ACTIONS =================================
const getReviews = (spotReviews) => ({
  type: GET_REVIEWS,
  spotReviews
});

const reviewNew = reviewData => ({
  type: REVIEW,
  reviewData,
});

const reviewDelete = revId => ({
  type: DEL_REVIEW,
  revId,
});

// ===== FUNCTIONS =================================

export const getSpotReviews = (spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
  
  if (response.ok) {
    const spotReviews = await response.json();
    // console.log(spotReviews, "<<+++ reviews +++")
    dispatch(getReviews(spotReviews));
  }
};

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
  dispatch(reviewNew(response));
  return response;
};

export const deleteReview = (revId) => async dispatch => {
  const response = await csrfFetch(`/api/reviews`, {
    method: 'DELETE',
    body: JSON.stringify({ revId }), 
  });
  dispatch(reviewDelete(response));
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
    case REVIEW: 
      return state
    
    case DEL_REVIEW: 
      return state

    case GET_REVIEWS: {
      // const spotReviews = {};
      // action.spotReviews.forEach(review => {
      //   spotReviews[review.id] = review;
      // });
      return {
        ...state,
        spotReviews: action.spotReviews,
      };
    } 
    
    default:
      return state;
  }
}

export default reviewsReducer;