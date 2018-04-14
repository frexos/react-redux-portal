import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './header.scss';

const Header = (props) => {

  const styles = {
    header: {
      backgroundColor: '#29506A',
      color: '#FFF',
      textAlign: 'left',
      position: 'fixed',
    }
  };

  const rightHeaderLinks = (isUserLogged) => {

    if (isUserLogged) {
      return (
        <div>
          <a href="">User-icon</a>
          <FlatButton
            style={{color: '#FFF'}}
            label="Logout"
            onTouchTap={() => Header.handleLogoutClick(props.keycloak)}/>
        </div>
      );
    } else {
      return (
        <div>
          <FlatButton
            style={{color: '#FFF'}}
            label="Sign In"
            onTouchTap={() => Header.handleLoginClick(props.keycloak)}/>
          <FlatButton
            style={{color: '#FFF'}}
            label="Sign Up"
            onTouchTap={() => Header.handleRegisterClick(props.keycloak)}/>
        </div>
      );
    }

  };

  return (
    <div>
      <AppBar title = {<img src = {props.headerLogo} className = "header__logo" alt = "logo"/>}
        iconElementRight = {
          rightHeaderLinks(props.keycloak.authenticated)
        }
        onLeftIconButtonClick={props.handleDrawerIconClick}
        iconStyleRight = {{marginRight:"20px"}}
        titleStyle = {{fontSize: "180%", display: "flex", alignItems: "center"}}
        style = {styles.header}
      />
    </div>
  );
};

Header.handleLogoutClick = (keycloak) => {
  keycloak.logout();
};

Header.handleLoginClick = (keycloak) => {
  keycloak.login();
};

Header.handleRegisterClick = (keycloak) => {
  keycloak.register();
};

Header.propTypes = {
  keycloak: PropTypes.object.isRequired,
  headerLogo: PropTypes.string.isRequired,
  handleDrawerIconClick: PropTypes.func.isRequired,
};

export default Header;
