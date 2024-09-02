import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Correct import for thunk
import rootReducer from "./reducers";

// Use window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ if it exists, otherwise use Redux's compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
