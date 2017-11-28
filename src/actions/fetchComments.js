import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';


export const fetchCommentsRequest = () => ({
  type: types.FETCH_COMMENTS_REQUEST
});

export const fetchCommentsSuccess = (data) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  payload: data
});

export const fetchCommentsFailure = (error) => ({
  type: types.FETCH_COMMENTS_FAILURE,
  payload: error
});

export default (article_id) => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    return axios.get(`${API_URL}/articles/${article_id}/comments`)
      .then(res => {
        dispatch(fetchCommentsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchCommentsFailure(err.response.data));
      });
  }
};