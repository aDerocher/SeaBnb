// ===== IMPORTS =================================
const LOAD = 'spots/LOAD';
// ===== STATES =================================
const load = list => ({
  type: LOAD,
  list,
});
// ===== FUNCTIONS =================================
export const getSpots = () => async dispatch => {
  const response = await fetch(`/spots`);
  
  if (response.ok) {
    const spots = await response.json();
    // console.log(spots, "++++++++++++++++++++++++++++++++++")
    dispatch(load(spots));
  }
};
// ===== SET STATE =================================
const initialState = {
  list: []
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
        ...allSpots,
        ...state,
        list: action.list
      };
    }
    
    default:
      return state;
  }
}

export default spotsReducer;