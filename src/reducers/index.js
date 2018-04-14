import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import keycloak from './keycloakReducer';
import openDrawer from './sidenavReducer';
import dashboardModalProps from './dashboardModalReducer';
import newsModalProps from './newsModalReducer';
import experiences from './experienceReducer';
import news from './newsReducer';
import recommendedExperiences from './recommendedExperienceReducer';

const rootReducer = combineReducers({
  openDrawer,
  routing: routerReducer,
  keycloak,
  experiences,
  news,
  recommendedExperiences,
  dashboardModalProps,
  newsModalProps,
});

export default rootReducer;
