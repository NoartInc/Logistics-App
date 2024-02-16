import axios from "axios";
import store from "./src/store";

const api = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? "https://transmetalroof.com:5000/" : "http://localhost:4000",
  baseURL: process.env.NODE_ENV === 'production' ? "http://localhost:4000" : "http://localhost:4000",
  headers: {
    "Content-type": "application/json"
  },
  timeout: 20000,
  timeoutErrorMessage: "Server not responding or your internet connection is slow"
})

api.interceptors.request.use((req) => {
  let token = store.getState().authReducer.token;
  if (token) {
      req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
}, (error) => {
  window.alert(error?.message);
  return Promise.reject(error);
});

api.interceptors.response.use((res) => {
  return res;
}, async (error) => {
  const originalRequest = error.config;
  if ((error.response?.status === 403 || error.response?.status === 401) && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await refreshAccessToken();            
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    return api(originalRequest);
  }
  window.alert(error?.message);
  return Promise.reject(error);
});

const refreshAccessToken = async () => {
  try {
    const { userName, password } = store.getState().authReducer.user;
    const result = await api.post("/auth", {
      username: userName, 
      password: password
    });
    store.dispatch({
      type: "LOGIN_USER",
      payload: result.data.data,
    });
    return result.data?.data?.token;
  } catch (error) {
    console.log(error);
  }
}

export default api
