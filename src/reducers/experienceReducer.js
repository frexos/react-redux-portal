import * as types from '../actions/actionTypes';

const experienceReducer = (state = [], action) => {
  switch(action.type) {
    case types.LOAD_EXPERIENCES_SUCCESS:
      return action.experiences.data;

    default:
      return state;
  }
};

export default experienceReducer;
