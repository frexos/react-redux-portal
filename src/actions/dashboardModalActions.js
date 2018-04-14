import * as types from "../actions/actionTypes";

export const openDashboardModal = (data) => {
  return {
    type: types.OPEN_DASHBOARD_MODAL,
    data
  };
};

export const closeDashboardModal = () => {
  return {type: types.CLOSE_DASHBOARD_MODAL};
};
