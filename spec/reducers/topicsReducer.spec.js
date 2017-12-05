import { expect } from 'chai';
import topicsReducer, { initialState } from '../../src/reducers/topicsReducer';
import {
  fetchTopicsRequest,
  fetchTopicsSuccess,
  fetchTopicsFailure
} from '../../src/actions/fetchTopics';

describe('topics reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'whatever' };
      const newState = topicsReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('uses the initial state if no previous state is passed', () => {
      const action = { type: 'whatever' };
      const newState = topicsReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('handles FETCH_TOPICS_REQUEST', () => {
    const action = fetchTopicsRequest();
    const newState = topicsReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('handles FETCH_TOPICS_SUCCESS', () => {
    const prevState = topicsReducer(undefined, fetchTopicsRequest());
    const data = [1, 2, 3];
    const action = fetchTopicsSuccess(data);
    const newState = topicsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('handles FETCH_TOPICS_FAILURE', () => {
    const prevState = topicsReducer(undefined, fetchTopicsRequest());
    const error = 'Something went wrong';
    const action = fetchTopicsFailure(error);
    const newState = topicsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});
