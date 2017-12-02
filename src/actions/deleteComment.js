import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';

  export const deleteCommentRequest = () => ({
    type: types.DELETE_COMMENT_REQUEST,
  });
    
  export const deleteCommentSuccess = (comments) => ({
    type: types.DELETE_COMMENT_SUCCESS,
    payload: comments
  });
    
  export const deleteCommentFailure = (error) => ({
    type: types.DELETE_COMMENT_FAILURE,
    payload: error
  });
  
  export default (comment_id) => {
    return (dispatch) => {
      dispatch(deleteCommentRequest());
      return axios.delete(`${API_URL}/comments/${comment_id}`)
        .then(res => {
          return dispatch(deleteCommentSuccess(res.data.comments));
        })
        .catch(err => { 
          return dispatch(deleteCommentFailure(err.response.data));
        });
    };
  };