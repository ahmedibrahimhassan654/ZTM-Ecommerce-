import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";
import { thunk } from "redux-thunk";
// import { loggerMiddleware } from "../utils/middelwares/loggerMiddleware";

// root reducer
// const middelware = [loggerMiddleware];
const middelware = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = composeEnhancer(applyMiddleware(...middelware));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);
