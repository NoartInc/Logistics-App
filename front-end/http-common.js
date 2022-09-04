import axios from "axios";
import store from "./src/store";

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? "https://transmetalroof.com:5000/" : "http://localhost:4000",
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
  return Promise.reject(error);
})

export default api
