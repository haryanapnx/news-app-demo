import * as actionTypes from "./actionTypes";

const initialState = {
  data: null,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_NEWS_LATEST:
      return {
        ...state,
        data: payload
      };
    case actionTypes.LOADING:
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
};
