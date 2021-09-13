

export const getSpots = () => async dispatch => {
  const response = await fetch(`/api/spots`);

  if (response.ok) {
    const spots = await response.json();
    dispatch(load(spots));
  }
};