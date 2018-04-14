import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar'
import {Link} from 'react-router-dom';

const Sidenav = (props) => {

  return (
    <div>
      <Drawer
        docked={false}
        width={350}
        open={props.openState}
        onRequestChange={props.handleDrawerRequestChange}
        containerClassName="my-drawer-menu">
        <AppBar
          iconElementLeft={<Avatar
            src="images/emotive-logo.png"
            size={60}/>}
          title={
            <div>
              <span>{props.username}</span>
              <span></span>
            </div>
          }/>
        <MenuItem
          containerElement={<Link to="/" />}
          primaryText="Dashboard"
          onClick={props.handleDrawerRequestChange} />
        <MenuItem
          containerElement={<Link to="/about" />}
          primaryText="About Page"
          onClick={props.handleDrawerRequestChange} />
      </Drawer>
    </div>
  );
};

Sidenav.propTypes = {
  openState: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  handleDrawerRequestChange: PropTypes.func.isRequired,
};

export default Sidenav;
