import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
// import {  } from "redux";
import logger from "redux-logger";
// import { configureStore } from "@reduxjs/toolkit";

import { rootreducer } from "./root-reducer";

// root reducer
const middelware = [logger];

const composedEnhancer = compose(applyMiddleware(...middelware));

export const store = createStore(rootreducer, undefined, composedEnhancer);
