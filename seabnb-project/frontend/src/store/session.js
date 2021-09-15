import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const SET_USER_BOOKINGS = 'session/setUserBookings'

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
const setUserBookings = (userBookings) => {
  return {
    type: SET_USER_BOOKINGS,
    userBookings: userBookings
  };
};
const removeUser = () => {
  return {
    type: REMOVE_USER,
    // payload: null
  };
};

export const restoreUser = () => async (dispatch)=> {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  console.log(data, "++++++++++++++++++++++++++++++++")
  dispatch(setUserBookings(data.userBookings));
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { firstName, lastName, email, password, confirmPassword } = user;
  const response = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
}

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch( 'api/session',{
    method: 'DELETE',
  });
  dispatch(removeUser);
  return response;
};

const initialState = { 
  user: null,
  userBookings: []
};

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case SET_USER_BOOKINGS:
      console.log(action.userBookings)
      return {
        ...state,
        userBookings: action.userBookings,
      };
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;