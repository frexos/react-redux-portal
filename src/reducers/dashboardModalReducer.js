import * as types from "../actions/actionTypes";

const initialState = {
  modalProps: {
    isOpen: false,
    title: '',
    body: '',
  }
};

export default function  dashboardModalReducer(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_DASHBOARD_MODAL:
      return {
        modalProps: action.data
      };
    case types.CLOSE_DASHBOARD_MODAL:
      return initialState;
    default:
      return state;
  }
}
