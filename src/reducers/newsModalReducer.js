import * as types from "../actions/actionTypes";

const initialState = {
  modalProps: {
    isOpen: false,
    title: '',
    body: '',
  }
};

export default function  newsModalReducer(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_NEWS_MODAL:
      return {
        modalProps: action.data
      };
    case types.CLOSE_NEWS_MODAL:
      return initialState;
    default:
      return state;
  }
}
