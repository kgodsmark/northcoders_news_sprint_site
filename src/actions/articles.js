import * as types from './types';
import axios from 'axios';

const API_URL = 'https://godsmark-news.herokuapp.com/api/';


export const fetchArticlesRequest = () => ({
  type: types.FETCH_ARTICLES_REQUEST
});

export const fetchArticlesSuccess = (data) => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  payload: data
});

export const fetchArticlesFailure = (error) => ({
  type: types.FETCH_ARTICLES_FAILURE,
  payload: error
});

export default (route) => {
  let searchString;
  if (!route) {
    searchString = `${API_URL}/articles`
  } else {
    searchString = `${API_URL}/topics/${route}/articles`;
  }
  return (dispatch) => {
    dispatch(fetchArticlesRequest());
    return axios.get(`${searchString}`)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(fetchArticlesFailure(err.message));
      });
  }
};