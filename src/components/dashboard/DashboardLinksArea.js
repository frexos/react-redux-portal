import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui-next/Grid';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardLinksArea = ({loginUrl, authed, dashboardLinks}) => {

  const style = (background) => {
    return {
      height: 120,
      width: "100%",
      margin: 0,
      textAlign: "center",
      display: "inline-block",
      position: "relative",
      overflow: "hidden",
      backgroundPosition: "center",
      backgroundSize: "100%",
      backgroundImage: background,
    };
  };

  const DashboardLink = (isUserLogged, linkData) => {

    if (!isUserLogged && linkData.linkUrl === '/profile') {
      return (
      <a className="dashboard-link--disabled" href={(loginUrl)()}>
        <div className="dashboard-link__overlay"></div>
        <h1>{linkData.linkText}</h1>
      </a>
      );
    } else {
      return (
        <Link to={linkData.linkUrl} className="dashboard-link">
          <div className="dashboard-link__overlay"></div>
          <h1>{linkData.linkText}</h1>
        </Link>
      );
    }
  };

  // const dashboardLinks = props.dashboardLinks;

  return (
    <div className="dashboard__links wrapper">
      <Grid container spacing = {24}>
        {dashboardLinks.map((dashboardLink, key) => (
          <Grid item xs = {12} sm = {4} key = {key}>
            <Paper style = {style(dashboardLink.linkBgImg)} zDepth = {2}>
              {DashboardLink(authed, dashboardLink)}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

DashboardLinksArea.propTypes = {
  loginUrl: PropTypes.func.isRequired,
  authed: PropTypes.bool.isRequired,
  dashboardLinks: PropTypes.array.isRequired,
};

export default DashboardLinksArea;
