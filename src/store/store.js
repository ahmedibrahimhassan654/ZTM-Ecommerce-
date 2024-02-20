import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
// import {  } from "redux";
// import logger from "redux-logger";
// import { configureStore } from "@reduxjs/toolkit";

import { rootreducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("current State: ", store.getState());
  next(action);
  console.log("next state: ", store.getState());
};

// root reducer
const middelware = [loggerMiddleware];

const composedEnhancer = compose(applyMiddleware(...middelware));

export const store = createStore(rootreducer, undefined, composedEnhancer);
