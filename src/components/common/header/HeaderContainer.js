import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import Header from "./Header";
import Sidenav from "./Sidenav";
import * as headerActions from '../../../actions/headerActions';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {auth} = this.props;

    return (
      <div>
        <Header
          headerLogo="images/emotive-logo_white.png"
          handleDrawerIconClick={() => {
            if (this.props.openDrawer === false) {
              this.props.actions.openDrawerMenu();
            } else {
              this.props.actions.closeDrawerMenu();
            }
          }}
          isDrawerOpen={this.props.openDrawer}
          keycloak = {auth}
        />
        <Sidenav openState={this.props.openDrawer}
          handleDrawerRequestChange={() => {
             this.props.actions.closeDrawerMenu();
          }
          }
          username={auth.authenticated ? auth.tokenParsed.preferred_username : "Navigation"}/>
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  auth: PropTypes.object.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    openDrawer: state.openDrawer,
    keycloak: state.keycloak
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(headerActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
