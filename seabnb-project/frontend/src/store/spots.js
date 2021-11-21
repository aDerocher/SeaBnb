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
    const {host, name, location, price, description} = spotData
    const response = await csrfFetch(`/api/spots/new`, {
        method: "POST",
        body: JSON.stringify({
            host, name, location, price, description
        }),
    });
    let data = await response.json()
    if (response.ok) {
      const data = await response.json();
      dispatch(addNewSpot(data.spot));
    }
};

export const newSpotPhoto = (file) => async dispatch => {
    formData.append("photos","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.k46g6RuO9HR25WQ6dr5kegHaE8%26pid%3DApi&f=1")
    const response = await csrfFetch(`/api/spots/newsingle`, {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
    });
    if (response.ok) {
        console.log(response, '================response============')
    //   const data = await response.json();
    //   dispatch(addNewSpot(data.spot));
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