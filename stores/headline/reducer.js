import * as actionTypes from "./actionTypes";

const initialState = {
  headline: [],
  loading_headline: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_HEADLINE:
      return {
        ...state,
        headline: payload
      };
    case actionTypes.LOADING:
      return {
        ...state,
        loading_headline: payload
      };
    default:
      return state;
  }
};
