// ===== IMPORTS =================================
import { csrfFetch } from './csrf'
// import { getOneSpot } from './spots';
import {ONE_SPOT} from './spots'

//===== I CANT REMEMBER WHAT THESE ARE CALLED ========
const NEW_REVIEW = 'reviews/NEW_REVIEW';
const DEL_REVIEW = 'reviews/DEL_REVIEW';
const GET_SPOT_REVIEWS = 'reviews/GET_REVIEWS';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'

// ===== ACTIONS =================================
const reviewNew = newReview => ({
  type: NEW_REVIEW,
  payload: newReview,
});

const getReviews = spotReviews => ({
  type: GET_SPOT_REVIEWS,
  payload: spotReviews
});

const reviewDelete = deadReview => ({
  type: DEL_REVIEW,
  payload: deadReview,
});

const reviewEdited = revData => ({
  type: EDIT_REVIEW,
  payload: revData,
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
  const data = await response.json()
  console.log(data, '<======================= store.NEW-SpotReview.data')
  dispatch(reviewNew(data.newReview));
  return response;
};

export const getSpotReviews = (spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
  
  if (response.ok) {
    const spotReviews = await response.json();
    // console.log(spotReviews, "<<+++ store.getSpotReviews.response +++")
    dispatch(getReviews(spotReviews.spotReviews));
  }
};

export const deleteReview = (revId) => async dispatch => {
  const response = await csrfFetch(`/api/reviews`, {
    method: 'DELETE',
    body: JSON.stringify({ revId }), 
  });
  const data = await response.json()
  dispatch(reviewDelete(data.deadReview));
  return response;
};

export const editReview = (body) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/${body.revId}`, {
    method: 'PATCH',
    body: JSON.stringify(body), 
  });
  const data = await response.json()
  dispatch(reviewEdited(data.editedRev));
  return response;
};

// ===== INITIAL STATE =================================
const initialState = [];

// ===== REDUCER =================================
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_REVIEW: 
            return [...state, action.payload]
        
        case GET_SPOT_REVIEWS:
            return [...action.payload]
            
        case EDIT_REVIEW:
            let editState = state.map( r => {
                if (r.id === action.payload.id){
                    return action.payload
                }
                return r
            }) 
            return [...editState]
            
        case DEL_REVIEW: 
            let delState = state.filter((r) => {
                return r.id !== action.payload.id
            }) 
            return [...delState]
        default:
            return state;
    }
}

export default reviewsReducer;