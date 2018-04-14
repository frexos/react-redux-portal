import * as types from "../actions/actionTypes";

export const openDrawerMenu = () => {
  return {type: types.OPEN_DRAWER};
};

export const closeDrawerMenu = () => {
  return {type: types.CLOSE_DRAWER};
};
