import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';

  export const postCommentRequest = () => ({
    type: types.DELETE_COMMENT_REQUEST,
  });
    
  export const postCommentSuccess = (comments) => ({
    type: types.DELETE_COMMENT_SUCCESS,
    payload: comments
  });
    
  export const postCommentFailure = (error) => ({
    type: types.DELETE_COMMENT_FAILURE,
    payload: error
  });
  
  export default (comment_id) => {
    return (dispatch) => {
      dispatch(postCommentRequest());
      return axios.post(`${API_URL}/comments/${comment_id}`)
        .then(res => {
          return dispatch(postCommentSuccess(res.data.comments));
        })
        .catch(err => { 
          return dispatch(postCommentFailure(err.response.data));
        });
    };
  };