import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import * as experienceActions from '../../actions/experienceActions';
import * as newsActions from '../../actions/newsActions';
import * as dashboardModalActions from '../../actions/dashboardModalActions';
import DashboardWrapper from './DashboardWrapper';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {authed, loginUrl, experiences, news, recommendedExperiences} = this.props;
    const dashboardLinks = [
      {
        linkUrl: '/news',
        linkText: 'News Feed',
        linkBgImg: 'url(images/news.jpeg)'
      },
      {
        linkUrl: '/latest-experiences',
        linkText: 'Latest Experiences',
        linkBgImg: 'url(images/games.jpeg)'
      },
      {
        linkUrl: '/profile',
        linkText: 'My Profile',
        linkBgImg: 'url(images/profile.jpeg)'
      },
      {
        linkUrl: '/search',
        linkText: 'Search',
        linkBgImg: 'url(images/search.jpeg)'
      },
      {
        linkUrl: '/museum-browser',
        linkText: 'Museum Browser',
        linkBgImg: 'url(images/museums.jpg)'
      },
      {
        linkUrl: '/tutorials',
        linkText: 'Tutorials',
        linkBgImg: 'url(images/tutorials.jpeg)'
      }
    ];

    return (
      <DashboardWrapper
        dashboardLinks = {dashboardLinks}
        authed = {authed}
        loginUrl = {loginUrl}
        featuredExperiences = {experiences}
        recommendedExperiences = {recommendedExperiences}
        news = {news}
        closeModal = {this.props.actions.closeDashboardModal}
        handleNewsItemClick={(data) => {
          this.props.actions.openDashboardModal(data);
        }}
        dashboardModalProps={this.props.dashboardModalProps}
      />
    );
  }
}

DashboardContainer.propTypes = {
  authed: PropTypes.bool.isRequired,
  loginUrl: PropTypes.func.isRequired,
  experiences: PropTypes.array.isRequired,
  news: PropTypes.array.isRequired,
  recommendedExperiences: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    closeDashboardModal: PropTypes.func.isRequired,
    openDashboardModal: PropTypes.func.isRequired,
  }),
  dashboardModalProps: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    experiences: state.experiences,
    news: state.news,
    dashboardModalProps: state.dashboardModalProps,
    recommendedExperiences: state.recommendedExperiences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, experienceActions, newsActions, dashboardModalActions), dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
