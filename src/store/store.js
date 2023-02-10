import { compose, applyMiddleware } from "redux";
// They recomend using configureStore frum RTK to avoid common bugs
import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, middleWares);
