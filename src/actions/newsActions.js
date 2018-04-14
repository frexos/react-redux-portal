import * as types from "../actions/actionTypes";
import axios from "axios";
import * as constants from "../utils/constants";

export function loadNewsSuccess(news) {
  return {type: types.LOAD_NEWS_SUCCESS, news};
}

export function loadNews() {
  return (dispatch => {
    return axios.get(constants.BACK_END_HOST + '/news').then(news => {
      dispatch(loadNewsSuccess(news));
    }).catch(error => {
      throw(error);
    });
  })
}
