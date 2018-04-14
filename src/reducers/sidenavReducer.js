import * as types from "../actions/actionTypes";

const sidenavReducer = (state = false, action) => {
  switch (action.type) {
    case types.OPEN_DRAWER:
      return true;

    case types.CLOSE_DRAWER:
      return false;

    default:
      return state;
  }
};

export default sidenavReducer;
