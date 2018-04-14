import * as types from "../actions/actionTypes";

export const openNewsModal = (data) => {
  return {
    type: types.OPEN_NEWS_MODAL,
    data
  };
};

export const closeNewsModal = () => {
  return {type: types.CLOSE_NEWS_MODAL};
};
