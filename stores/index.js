import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const initStore = (initialState = {}, options) => {
  const middleware = composeWithDevTools(applyMiddleware(ReduxThunk));
  return createStore(reducer, initialState, middleware);
};
