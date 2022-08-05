import http from "../../../http-common";

export const login = (data) => {
  return (dispatch) => {
    http
      .post("/auth", data)
      .then((res) => {
        dispatch({
          type: "LOGIN_USER",
          payload: res.data.data,
        });
        if (res.status) {
          window.localStorage.setItem(
            "userData",
            JSON.stringify(res.data.data)
          );
          window.open("/", "_self");
        }
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };
};

export const logout = (data) => {
  return (dispatch) => {
    dispatch({
      type: "authLogout",
    });
  };
};
