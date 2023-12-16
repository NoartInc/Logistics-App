import { combineReducers } from "redux";
import users from "./user-reducer";
import kendaraans from "./kendaraan-reducer";
import customers from "./customer-reducer";
import telis from "./teli-reducer";
import gradings from "./grading-reducer";
import produksis from "./produksi-reducer";
import pengangkutans from "./pengangkutan-reducer";
import pengirimans from "./pengiriman-reducer";
import authReducer from "./auth-reducer";
import layoutReducer from "./layout-reducer";

export default combineReducers({
  layout: layoutReducer,
  users,
  kendaraans,
  customers,
  telis,
  gradings,
  produksis,
  pengangkutans,
  pengirimans,
  authReducer,
  gradings
});