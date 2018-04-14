import * as types from '../actions/actionTypes';

const recommendedExperienceReducer = (state = [], action) => {
  switch(action.type) {
    case types.LOAD_RECOMMENDED_EXPERIENCES_SUCCESS:
      return action.recommendedExperiences;

    default:
      return state;
  }
};

export default recommendedExperienceReducer;
