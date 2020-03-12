import { combineReducers } from "redux";

import newsLatestReducers from "./news_latest/reducer";
import newsHeadlineReducers from "./headline/reducer";

const reducers = combineReducers({
  newsLatest: newsLatestReducers,
  headline: newsHeadlineReducers
});

export default reducers;
