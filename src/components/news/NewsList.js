import React from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import Grid from 'material-ui-next/Grid';
import './news.scss';

const NewsList = (props) => {

  const style = {
    width: "100%",
    overflow: "hidden",
  };

  const news = props.news;
  const title = props.newsModalProps.modalProps.title;
  const body = props.newsModalProps.modalProps.body;

  return (
    <div className="wrapper">
      <Grid container spacing={24} justify={"center"}>
        <Grid item xs={12} md={9}>
          <div className="news">
            <div className="news__title">
              <h1>NEWS FEED</h1>
            </div>
            <div className="news__list">
              {news.map((newsItem, key) => (
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
              open={props.newsModalProps.modalProps.isOpen}
              onRequestClose={props.closeModal}>
              {body}
            </Dialog>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
  newsModalProps: PropTypes.shape({
    modalProps: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  }),
  closeModal: PropTypes.func.isRequired,
};

export default NewsList;
