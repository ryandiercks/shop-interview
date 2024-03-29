import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// allow browser to cache our store
import { persistStore } from "redux-persist";

import thunk from 'redux-thunk'

import rootReducer from "./rootReducer";

const middlewares = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
