import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import * as newsActions from '../../actions/newsActions';
import NewsList from './NewsList';
import * as newsModalActions from '../../actions/newsModalActions';

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {news} = this.props;

    return (
      <NewsList
        news = {news}
        closeModal = {this.props.actions.closeNewsModal}
        handleNewsItemClick={(data) => {
          this.props.actions.openNewsModal(data);
        }}
        newsModalProps={this.props.newsModalProps}
      />
    );
  }
}

NewsContainer.propTypes = {
  news: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    closeNewsModal: PropTypes.func.isRequired,
    openNewsModal: PropTypes.func.isRequired,
  }),
  newsModalProps: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    news: state.news,
    newsModalProps: state.newsModalProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, newsActions, newsModalActions), dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
