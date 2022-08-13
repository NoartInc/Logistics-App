import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhanceMiddleware = applyMiddleware(thunk);
const composeMiddleware = compose(enhanceMiddleware);

const store = createStore(persistedReducer, undefined, composeMiddleware);

export const persistor = persistStore(store);
export default store;
