import * as types from '../actions/actionTypes';
import getSortedNews  from '../utils/news';

const newsReducer = (state = [], action) => {
  switch(action.type) {
    case types.LOAD_NEWS_SUCCESS:
      getSortedNews(action.news.data)
      return action.news.data;

    default:
      return state;
  }
};

export default newsReducer;
