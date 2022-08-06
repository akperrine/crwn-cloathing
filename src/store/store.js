import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from "redux-logger";

import { rootReducer } from "./root-reducer";
import { cartReducer } from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root",
  storage,
  blacklist: [userReducer],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
