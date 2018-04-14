/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore, {history} from './store/configureStore';
import {Provider} from 'react-redux';
import Root from './components/Root';
import './styles/styles.scss';
import Keycloak from "keycloak-js";
import axios from "axios";
import * as logger from 'loglevel';
import {LOGIN_SUCCESSFUL} from './actions/actionTypes';
import {loadExperiences, loadRecommendedExperiences} from './actions/experienceActions';
import {loadNews} from './actions/newsActions';

require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();
store.dispatch(loadExperiences());
store.dispatch(loadRecommendedExperiences());
store.dispatch(loadNews());

const kc = Keycloak('/keycloak.json');
kc.init({onLoad: 'check-sso'}).success(authenticated => {
  if (authenticated) {
    //Store the keycloak object into the Redux Store
    // store.getState().keycloak = kc;
    store.dispatch({type: LOGIN_SUCCESSFUL, keycloak: kc});

    setInterval(() => {
      kc.updateToken(10).error(() => kc.logout());
    }, 10000);

    //Here we set the logging level for custom application logs. NOT the Redux specific ones.
    //The NODE_ENV automatically switches into 'production' by the Create-React-App when executing the "yarn build" command.

    render(
      <Provider store={store}>
        <AppContainer>
          <Root store={store} history={history} keycloak={kc}/>
        </AppContainer>
      </Provider>,
      document.getElementById('app')
    );


  } else {
    // show possibly other page here...
    render(
      <Provider store={store}>
        <AppContainer>
          <Root store={store} history={history} keycloak={kc}/>
        </AppContainer>
      </Provider>,
      document.getElementById('app')
    );
  }

});

axios.interceptors.request.use(config => {
  config.headers = {...config.headers, ...{
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + kc.token
  }};
  return config;
});

if (process.env.NODE_ENV === 'development') {
  logger.setLevel("debug");
} else {
  logger.setLevel("info");
}



