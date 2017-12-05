import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';

export const fetchUserReposRequest = () => ({
  type: types.FETCH_USERREPOS_REQUEST
});

export const fetchUserReposSuccess = (data) => ({
  type: types.FETCH_USERREPOS_SUCCESS,
  payload: data
});

export const fetchUserReposFailure = (error) => ({
  type: types.FETCH_USERREPOS_FAILURE,
  payload: error
});

export default (username) => {
  return (dispatch) => {
    dispatch(fetchUserReposRequest());
    return axios.get(`${API_URL}/users/${username}/repos`)
      .then(res => {
        dispatch(fetchUserReposSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(fetchUserReposFailure(err.response.data));
      });
  };
};
