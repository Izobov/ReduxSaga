import { createStore, compose } from "redux";
import reducer from "./redusers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const storeCreator = (initialState) =>
  createStore(reducer, initialState, composeEnhancers());

const store = storeCreator();

export default store;
