import * as actionTypes from "./actionTypes";
import { apiCall } from "../../services/request";
import { isEmpty } from "../../utils/general";

export const isLoading = bool => dispatch => {
  dispatch({
    type: actionTypes.LOADING,
    payload: bool
  });
};

export const getNewsLates = params => async dispatch => {
  const dataReq = {
    method: "GET",
    url: "/top-headlines",
    data: {
      params
    }
  };
  dispatch(isLoading(true));
  const res = await dispatch(apiCall(dataReq));
  if (!isEmpty(res)) {
    dispatch({
      type: actionTypes.GET_NEWS_LATEST,
      payload: res.articles
    });
  }
  dispatch(isLoading(false));
  return res;
};
