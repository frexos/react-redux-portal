import React from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';

const NewsArea = (props) => {

  const style = {
    width: "100%",
    overflow: "hidden",
  };

  const news = props.news;
  const title = props.dashboardModalProps.modalProps.title;
  const body = props.dashboardModalProps.modalProps.body;

  return (
    <div className="wrapper">
      <div className="news">
        <div className="news__title">
          <h1>LATEST NEWS</h1>
        </div>
        <div className="news__list">
          {news.slice(0, 6).map((newsItem, key) => (
            <Paper className="news-item" key={key} style={style} zDepth={2}>
              <a className="news-item__link" onClick={()=>{props.handleNewsItemClick({
                isOpen: true,
                title: newsItem.title,
                body: newsItem.body
              })}}>
                <div className="news-item__title">
                  <h2>{newsItem.title}</h2>
                </div>
                <div className="news-item__body">
                  {newsItem.body}
                </div>
              </a>
            </Paper>
          ))}
        </div>
        <Dialog
          title={title}
          modal={false}
          open={props.dashboardModalProps.modalProps.isOpen}
          onRequestClose={props.closeModal}>
          {body}
        </Dialog>
      </div>
    </div>
  );
};

NewsArea.propTypes = {
  news: PropTypes.array.isRequired,
  dashboardModalProps: PropTypes.shape({
    modalProps: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  }),
  closeModal: PropTypes.func.isRequired,
};

export default NewsArea;
