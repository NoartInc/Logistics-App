import { combineReducers } from "redux";
import users from "./user-reducer";
import kendaraans from "./kendaraan-reducer";
import customers from "./customer-reducer";
import telis from "./teli-reducer";
import pengangkutans from "./pengangkutan-reducer";
import pengirimans from "./pengiriman-reducer";
import authReducer from "./auth-reducer";

export default combineReducers({
  users,
  kendaraans,
  customers,
  telis,
  pengangkutans,
  pengirimans,
  authReducer
});