import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootreducer } from "./root-reducer";

// root reducer
const middelware = [logger];

const composedEnhancer = compose(applyMiddleware(...middelware));

export const store = createStore(rootreducer, undefined, composedEnhancer);
