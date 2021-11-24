import { csrfFetch } from './csrf'

// ===== IMPORTS =================================
const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';
export const ONE_SPOT = 'spots/ONE_SPOT';
const NEW_SPOT = 'spots/NEW_SPOT';
const EDIT_SPOT = 'spots/EDIT_SPOT';
const DELETE_SPOT = 'spots/DELETE_SPOT';

// ===== ACTIONS =================================
const loadAllSpots = list => ({
  type: GET_ALL_SPOTS,
  payload: list,
});

const loadOneSpot = spot => ({
  type: ONE_SPOT,
  payload: spot
});

const addNewSpot = spot => ({
    type: NEW_SPOT,
    payload: spot
})
const editOneSpot = spot => ({
    type: EDIT_SPOT,
    payload: spot
})
const deleteOneSpot = spot => ({
    type: DELETE_SPOT,
    payload: spot
})

// ===== FUNCTIONS =================================
export const getSpots = () => async dispatch => {
  const response = await csrfFetch(`/api/spots`);
  
  if (response.ok) {
    const spots = await response.json();
    dispatch(loadAllSpots(spots));
  }
};

export const getUsersSpots = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/users/${userId}/spots`);
  
  if (response.ok) {
    const spots = await response.json();
    dispatch(loadAllSpots(spots));
  }
};

export const getOneSpot = (spotId) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}`);
  if (response.ok) {
    const spot = await response.json();
    dispatch(loadOneSpot(spot.oneSpot));
  }
};


export const newSpot = (spotData) => async (dispatch) => {
    const {host, name, location, price, description, photos} = spotData
    let formData = new FormData();
    formData.append("host", host);
    formData.append("name", name);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("description", description);
    if (photos && photos.length !== 0) {
        for (var i = 0; i < photos.length; i++) {
          formData.append("photos", photos[i]);
        }
    }
    const response = await csrfFetch(`/api/spots/new`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formData
    });
    let data = await response.json()
    if (response.ok) {
        console.log(data, data.spot, 'data and data.spot')
      dispatch(addNewSpot(data.spot));
    }
};

export const editSpot = (spotData) => async (dispatch) => {
    const {spotId, name, location, price, description} = spotData

    const response = await csrfFetch(`/api/spots/${spotId}/edit`, {
        method: "PATCH",
        body: JSON.stringify(spotData)
    });
    let data = await response.json()
    if (response.ok) {
      dispatch(editOneSpot(data.editedSpot));
    }
};
export const deleteSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: "DELETE"
    });
    let data = await response.json()
    if (response.ok) {
        dispatch(deleteOneSpot(data.deadSpot));
    }
};


// ===== SET STATE =================================
const initialState = [];

// ===== REDUCER =================================
const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
        case GET_ALL_SPOTS: {
            return [...action.payload]
        }

        case ONE_SPOT: {
            return [ action.payload ];
        }

        case NEW_SPOT: {
            return [ ...state, action.payload ]
        }

        case EDIT_SPOT: {
            let newState = state.map((s)=>{
                if(s.id === action.payload.id){
                    return action.payload
                }
                return s
            })
            return [ ...newState]
        }

        case DELETE_SPOT: {
            let newState = state.filter((s)=>{
                return s.id !== action.payload.id
            })
            return [ ...newState]
        }
        
        default:
            return state;
  }
}

export default spotsReducer;