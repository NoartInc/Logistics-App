import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const enhanceMiddleware = applyMiddleware(thunk);

const store = createStore(persistedReducer, composeWithDevTools(enhanceMiddleware));

export const persistor = persistStore(store);
export default store;
