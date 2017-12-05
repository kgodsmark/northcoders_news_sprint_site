import { expect } from 'chai';
import commentsReducer, { initialState } from '../../src/reducers/commentsReducer';
import {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFailure
} from '../../src/actions/fetchComments';
import {
  postCommentRequest,
  postCommentSuccess,
  postCommentFailure
} from '../../src/actions/postComment';
import {
  changeCommentVoteRequest,
  changeCommentVoteSuccess,
  changeCommentVoteFailure
} from '../../src/actions/changeCommentVote';
import {
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure
} from '../../src/actions/deleteComment';

describe('comments reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'whatever' };
      const newState = commentsReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('uses the initial state if no previous state is passed', () => {
      const action = { type: 'whatever' };
      const newState = commentsReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('handles FETCH_COMMENTS_REQUEST', () => {
    const action = fetchCommentsRequest();
    const newState = commentsReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('handles FETCH_COMMENTS_SUCCESS', () => {
    const prevState = commentsReducer(undefined, fetchCommentsRequest());
    const data = [1, 2, 3];
    const action = fetchCommentsSuccess(data);
    const newState = commentsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
    expect(newState.data).to.not.equal(prevState.data);
  });
  it('handles FETCH_COMMENTS_FAILURE', () => {
    const prevState = commentsReducer(undefined, fetchCommentsRequest());
    const error = 'Something went wrong';
    const action = fetchCommentsFailure(error);
    const newState = commentsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
    expect(newState.data).to.not.equal(prevState.data);
  });
  it('handles POST_COMMENT_REQUEST', () => {
    const action = postCommentRequest();
    const newState = commentsReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('handles POST_COMMENT_SUCCESS', () => {
    const prevState = commentsReducer(undefined, postCommentRequest());
    const data = [1, 2, 3];
    const action = postCommentSuccess(data);
    const newState = commentsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
    expect(newState.data).to.not.equal(prevState.data);
  });
  it('handles POST_COMMENT_FAILURE', () => {
    const prevState = commentsReducer(undefined, postCommentRequest());
    const error = 'Something went wrong';
    const action = postCommentFailure(error);
    const newState = commentsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
    expect(newState.data).to.not.equal(prevState.data);
  });
  it('handles PATCH_COMMENT_REQUEST', () => {
    const action = changeCommentVoteRequest();
    const newState = commentsReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('handles PATCH_COMMENT_SUCCESS', () => {
    const prevState = commentsReducer(undefined, changeCommentVoteRequest());
    const data = [1, 2, 3];
    const action = changeCommentVoteSuccess(data);
    const newState = commentsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
    expect(newState.data).to.not.equal(prevState.data);
  });
  it('handles PATCH_COMMENT_FAILURE', () => {
    const prevState = commentsReducer(undefined, changeCommentVoteRequest());
    const error = 'Something went wrong';
    const action = changeCommentVoteFailure(error);
    const newState = commentsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
    expect(newState.data).to.not.equal(prevState.data);
  });
  it('handles DELETE_COMMENT_REQUEST', () => {
    const action = deleteCommentRequest();
    const newState = commentsReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('handles DELETE_COMMENT_SUCCESS', () => {
    const prevState = commentsReducer(undefined, deleteCommentRequest());
    const data = [1, 2, 3];
    const action = deleteCommentSuccess(data);
    const newState = commentsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
    expect(newState.data).to.not.equal(prevState.data);
  });
  it('handles DELETE_COMMENT_FAILURE', () => {
    const prevState = commentsReducer(undefined, deleteCommentRequest());
    const error = 'Something went wrong';
    const action = deleteCommentFailure(error);
    const newState = commentsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
    expect(newState.data).to.not.equal(prevState.data);
  });
});
