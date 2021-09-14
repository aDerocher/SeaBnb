// ===== IMPORTS =================================
const LOAD = 'spots/LOAD';
const ONE_SPOT = 'spots/ONE_SPOT';

// ===== ACTIONS =================================
const load = list => ({
  type: LOAD,
  list,
});
const oneSpot = spot => ({
  type: ONE_SPOT,
  spot
})

// ===== FUNCTIONS =================================
export const getSpots = () => async dispatch => {
  const response = await fetch(`/spots`);
  
  if (response.ok) {
    const spots = await response.json();
    // console.log(spots, "<<+++ spots +++")
    dispatch(load(spots));
  }
};
export const getOneSpot = (spotId) => async dispatch => {
  const response = await fetch(`/spots/${spotId}`);
  
  if (response.ok) {
    const spot = await response.json();
    console.log(spot, "<<+++ spot +++")
    dispatch(oneSpot(spot));
  }
};
// ===== SET STATE =================================
const initialState = {
  list: [],
  spot: {}
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
      };
    }

    case ONE_SPOT: {
      // console.log(action.spot, "<=====action.spot======");
      return {
        ...state,
        spot: action.spot
      };
    }
    

    default:
      return state;
  }
}

export default spotsReducer;