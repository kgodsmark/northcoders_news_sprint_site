import { expect } from 'chai';
import userReducer, { initialState } from '../../src/reducers/userReducer';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../../src/actions/fetchUser';


describe('user reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'whatever' };
      const newState = userReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('uses the initial state if no previous state is passed', () => {
      const action = { type: 'whatever' };
      const newState = userReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('handles FETCH_ARTICLE_REQUEST', () => {
    const action = fetchUserRequest();
    const newState = userReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('handles FETCH_ARTICLE_SUCCESS', () => {
    const prevState = userReducer(undefined, fetchUserRequest());
    const data = [1, 2, 3];
    const action = fetchUserSuccess(data);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('handles FETCH_ARTICLE_FAILURE', () => {
    const prevState = userReducer(undefined, fetchUserRequest());
    const error = 'Something went wrong';
    const action = fetchUserFailure(error);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});