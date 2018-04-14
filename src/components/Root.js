import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router'
import App from './common/App';
import Dashboard from './dashboard/DashboardContainer';
import NewsPage from './news/NewsContainer';

export default class Root extends Component {

  render() {
    const {history, keycloak} = this.props;

    return (
      <ConnectedRouter history={history}>
        <App keycloak = {keycloak}>
          <Route exact path = "/" render={() => (
            <Dashboard authed = {keycloak.authenticated} loginUrl = {keycloak.createLoginUrl} />)} />
          <Route path = "/news" component = {NewsPage}/>
        </App>
      </ConnectedRouter>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  keycloak: PropTypes.object.isRequired,
};
