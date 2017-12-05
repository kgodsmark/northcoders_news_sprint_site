import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';

export const changeCommentVoteRequest = () => ({
  type: types.PATCH_COMMENT_REQUEST,
});
    
export const changeCommentVoteSuccess = (comment) => ({
  type: types.PATCH_COMMENT_SUCCESS,
  payload: comment
});
    
export const changeCommentVoteFailure = (error) => ({
  type: types.PATCH_COMMENT_FAILURE,
  payload: error
});
  
export default (comment_id, voteChange) => {
  return (dispatch) => {
    dispatch(changeCommentVoteRequest());
    return axios.patch(`${API_URL}/comments/${comment_id}?vote=${voteChange}`)
      .then(res => {
        return dispatch(changeCommentVoteSuccess(res.data.comments));
      })
      .catch(err => { 
        return dispatch(changeCommentVoteFailure(err.response.data));
      });
  };
};
