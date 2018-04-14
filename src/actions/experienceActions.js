import * as types from "../actions/actionTypes";
import axios from "axios";
import * as constants from "../utils/constants";

export function loadExperiencesSuccess(experiences) {
  return {type: types.LOAD_EXPERIENCES_SUCCESS, experiences};
}

export function loadExperiences() {
  return (dispatch => {
    return axios.get(constants.BACK_END_HOST + '/experience/getfeatured').then(experiences => {
      dispatch(loadExperiencesSuccess(experiences));
    }).catch(error => {
      throw(error);
    });
  })
}

/*  load recommended experiences - for now same as featured  */
export function loadRecommendedExperiencesSuccess(recommendedExperiences) {
  return {type: types.LOAD_RECOMMENDED_EXPERIENCES_SUCCESS, recommendedExperiences};
}

export function loadRecommendedExperiences() {
  return (dispatch => {
    // return axios.get(constants.BACK_END_HOST).then(experiences => {
    //   dispatch(loadExperiencesSuccess(experiences));
    // }).catch(error => {
    //   throw(error);
    // });
    return (
      dispatch(loadRecommendedExperiencesSuccess(constants.dummy_experiences))
    );
  })
}
