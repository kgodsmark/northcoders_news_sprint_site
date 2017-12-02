import { expect } from 'chai';
import articleReducer, { initialState } from '../../src/reducers/articleReducer';
import {
  fetchArticleRequest,
  fetchArticleSuccess,
  fetchArticleFailure
} from '../../src/actions/fetchArticle';
import {
  changeArticleVoteRequest,
  changeArticleVoteSuccess,
  changeArticleVoteFailure
} from '../../src/actions/changeArticleVote';


describe('article reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'whatever' };
      const newState = articleReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('uses the initial state if no previous state is passed', () => {
      const action = { type: 'whatever' };
      const newState = articleReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('handles FETCH_ARTICLE_REQUEST', () => {
    const action = fetchArticleRequest();
    const newState = articleReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('handles FETCH_ARTICLE_SUCCESS', () => {
    const prevState = articleReducer(undefined, fetchArticleRequest());
    const data = [1, 2, 3];
    const action = fetchArticleSuccess(data);
    const newState = articleReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('handles FETCH_ARTICLE_FAILURE', () => {
    const prevState = articleReducer(undefined, fetchArticleRequest());
    const error = 'Something went wrong';
    const action = fetchArticleFailure(error);
    const newState = articleReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
  it('handles PATCH_ARTICLE_REQUEST', () => {
    const action = changeArticleVoteRequest();
    const newState = articleReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('handles PATCH_ARTICLE_SUCCESS', () => {
    const prevState = articleReducer(undefined, changeArticleVoteRequest());
    const data = [1, 2, 3];
    const action = changeArticleVoteSuccess(data);
    const newState = articleReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('handles PATCH_ARTICLE_FAILURE', () => {
    const prevState = articleReducer(undefined, changeArticleVoteRequest());
    const error = 'Something went wrong';
    const action = changeArticleVoteFailure(error);
    const newState = articleReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});