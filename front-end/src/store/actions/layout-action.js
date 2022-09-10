export const toggleBanner = (state = true) => {
  return (dispatch) => {
    dispatch({
        type: "TOGGLE_BANNER",
        payload: state,
    });
  };
};