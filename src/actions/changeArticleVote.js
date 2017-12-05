import * as types from './types';
import axios from 'axios';

import API_URL from '../api_url';

export const changeArticleVoteRequest = () => ({
  type: types.PATCH_ARTICLE_REQUEST,
});
    
export const changeArticleVoteSuccess = (article) => ({
  type: types.PATCH_ARTICLE_SUCCESS,
  payload: article
});
    
export const changeArticleVoteFailure = (error) => ({
  type: types.PATCH_ARTICLE_FAILURE,
  payload: error
});
  
export default (article_id, voteChange) => {
  return (dispatch) => {
    dispatch(changeArticleVoteRequest());
    return axios.patch(`${API_URL}/articles/${article_id}?vote=${voteChange}`)
      .then(res => {
        return dispatch(changeArticleVoteSuccess(res.data.article));
      })
      .catch(err => { 
        return dispatch(changeArticleVoteFailure(err.response.data));
      });
  };
};
