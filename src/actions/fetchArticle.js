import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';

export const fetchArticleRequest = () => ({
  type: types.FETCH_ARTICLE_REQUEST
});

export const fetchArticleSuccess = (data) => ({
  type: types.FETCH_ARTICLE_SUCCESS,
  payload: data
});

export const fetchArticleFailure = (error) => ({
  type: types.FETCH_ARTICLE_FAILURE,
  payload: error
});

export default (article_id) => {
  return (dispatch) => {
    dispatch(fetchArticleRequest());
    return axios.get(`${API_URL}/articles/${article_id}`)
      .then(res => {
        dispatch(fetchArticleSuccess(res.data.article));
      })
      .catch(err => {
        dispatch(fetchArticleFailure(err.response.data));
      });
  };
};
