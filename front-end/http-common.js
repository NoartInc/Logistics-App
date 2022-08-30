import axios from "axios";
import store from "./src/store";

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? "https://transmetalroof.com:5000/" : "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
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
