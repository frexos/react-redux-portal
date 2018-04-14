/* eslint-disable import/no-named-as-default */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropTypes from 'prop-types';
import HeaderContainer from './header/HeaderContainer';
import './app.scss';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    const { keycloak } = this.props;

    return (
      <MuiThemeProvider>
        <div className="app">
          <HeaderContainer auth={keycloak}/>
          <div className="app__wrapper">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.array.isRequired,
  keycloak: PropTypes.object.isRequired,
};


export default App;
