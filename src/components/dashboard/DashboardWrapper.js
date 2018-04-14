import React from 'react';
import Grid from 'material-ui-next/Grid';
import DashboardLinksArea from './DashboardLinksArea';
import FeaturedExperiencesList from './FeaturedExperiencesList';
import RecommendedExperiencesList from './RecommendedExperiencesList';
import NewsArea from './NewsArea';
import PropTypes from 'prop-types';
import './dashboard.scss';

const DashboardWrapper = (props) => {

  return (
    <div className="dashboard wrapper">
      <Grid container spacing={24}>
        <Grid item xs={12} md={9}>
          <DashboardLinksArea
            loginUrl={props.loginUrl}
            authed={props.authed}
            dashboardLinks={props.dashboardLinks}/>
          <NewsArea
            news={props.news}
            handleNewsItemClick={props.handleNewsItemClick}
            closeModal = {props.closeModal}
            dashboardModalProps={props.dashboardModalProps}/>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="dashboard__grid--right experiences">
            <FeaturedExperiencesList experiences = {props.featuredExperiences} />
            <RecommendedExperiencesList experiences = {props.recommendedExperiences} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

DashboardWrapper.propTypes = {
  dashboardLinks: PropTypes.array.isRequired,
  loginUrl: PropTypes.func.isRequired,
  authed: PropTypes.bool.isRequired,
  featuredExperiences: PropTypes.array.isRequired,
  recommendedExperiences: PropTypes.array.isRequired,
  news: PropTypes.array.isRequired,
  handleNewsItemClick: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  dashboardModalProps: PropTypes.object.isRequired,
};

export default DashboardWrapper;
