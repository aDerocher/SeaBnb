import { csrfFetch } from './csrf'

// ===== IMPORTS =================================
const LOAD = 'spots/LOAD';
export const ONE_SPOT = 'spots/ONE_SPOT';
const NEW_SPOT = 'spots/NEW_SPOT';

// ===== ACTIONS =================================
const load = list => ({
  type: LOAD,
  list,
});

const oneSpot = spot => ({
  type: ONE_SPOT,
  spot
});

const addNewSpot = spot => ({
    type: NEW_SPOT,
    payload: spot
})

// ===== FUNCTIONS =================================
export const getSpots = () => async dispatch => {
  const response = await csrfFetch(`/api/spots`);
  
  if (response.ok) {
    const spots = await response.json();
    // console.log(spots, "<<+++ spots +++")
    dispatch(load(spots));
  }
};

export const getOneSpot = (spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}`);
  if (response.ok) {
    const spot = await response.json();
    // console.log(spot, "<<+++ spot +++")
    dispatch(oneSpot(spot));
  }
};

export const newSpot = (spotData) => async dispatch => {
    const response = await csrfFetch(`/api/spots/new`, {
        method: 'POST',
        body: JSON.stringify({
            host: spotData.host,
            name: spotData.name,
            location: spotData.location,
            price: spotData.price,
            description: spotData.description,
            photo1: spotData.photo1,
            photo2: spotData.photo2,
            photo3: spotData.photo3,
            photo4: spotData.photo4,
            photo5: spotData.photo5
            // reviews: spotData.reviews,
            // rules: spotData.rules,
            // amenities: spotData.amenities,
        }),
      });
    if (response.ok) {
      const data = await response.json();
      dispatch(addNewSpot(data.spot));
    }
};


// ===== SET STATE =================================
const initialState = {
  list: [],
  spot: {},
  spotsObj: {}
};

// ===== REDUCER =================================
const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allSpots = {};
      action.list.forEach(spot => {
        allSpots[spot.id] = spot;
      });
      return {
        ...state,
        list: action.list,
        spotsObj: allSpots
      };
    }

    case ONE_SPOT: {
      // console.log(action.spot, "<=====action.spot======");
      return {
        ...state,
        spot: action.spot
      };
    }

    case NEW_SPOT: {
      return {
        ...state,
        spot: action.payload
      };
    }
    
    default:
      return state;
  }
}

export default spotsReducer;