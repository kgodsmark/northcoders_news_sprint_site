import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';

  export const postCommentRequest = () => ({
    type: types.POST_COMMENT_REQUEST,
  });
    
  export const postCommentSuccess = (comments) => ({
    type: types.POST_COMMENT_SUCCESS,
    payload: comments
  });
    
  export const postCommentFailure = (error) => ({
    type: types.POST_COMMENT_FAILURE,
    payload: error
  });
  
  export default (article_id, body, username) => {
    return (dispatch) => {
      dispatch(postCommentRequest());
      return axios.post(`${API_URL}/articles/${article_id}/comments`, {body: body, belongs_to: article_id, created_by: username})
        .then(res => {
          return dispatch(postCommentSuccess(res.data));
        })
        .catch(err => { 
          return dispatch(postCommentFailure(err.response.data));
        });
    };
  };