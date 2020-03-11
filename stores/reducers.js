import { combineReducers } from "redux";

import newsLatestReducers from "./news_latest/reducer";

const reducers = combineReducers({
  newsLatest: newsLatestReducers,
});

export default reducers;
