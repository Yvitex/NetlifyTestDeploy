import { compose, createStore, applyMiddleware  } from "redux";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

import logger from "redux-logger";

import { RootReducer } from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const configPersist = {
    key: "root",
    storage: storage,
    blacklist: ["user"]
}

const persistedReducer = persistReducer(configPersist, RootReducer);

const middlewares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);