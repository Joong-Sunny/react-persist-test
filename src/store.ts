import { createStore, applyMiddleware, compose } from "redux";
import { persistReducer } from "redux-persist";
import rootReducer from "./reducer";
import customStorage from "./customStorageSetting";


const persistConfig = {
  key: "root",
  storage: customStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware())
);
