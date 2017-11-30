import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';


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

export default (topic) => {
topic = (topic) ? 'topics/' + topic + '/' : '';
  return (dispatch) => {
    dispatch(fetchArticlesRequest());
    return axios.get(`${API_URL}/${topic}articles`)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(fetchArticlesFailure(err.response.data));
      });
  }
};