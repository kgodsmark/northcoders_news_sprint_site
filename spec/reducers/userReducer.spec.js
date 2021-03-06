import { expect } from 'chai';
import userReducer, { initialState } from '../../src/reducers/userReducer';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../../src/actions/fetchUser';
import {
  fetchUserReposRequest,
  fetchUserReposSuccess,
  fetchUserReposFailure
} from '../../src/actions/fetchUserRepos';

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
  it('handles FETCH_USER_REQUEST', () => {
    const action = fetchUserRequest();
    const newState = userReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('handles FETCH_USER_SUCCESS', () => {
    const prevState = userReducer(undefined, fetchUserRequest());
    const data = [1, 2, 3];
    const action = fetchUserSuccess(data);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
    expect(newState.data).to.not.equal(prevState.data);
  });
  it('handles FETCH_USER_FAILURE', () => {
    const prevState = userReducer(undefined, fetchUserRequest());
    const error = 'Something went wrong';
    const action = fetchUserFailure(error);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);    
    expect(newState.data).to.not.equal(prevState.data);
  });
  it('handles FETCH_USERREPOS_REQUEST', () => {
    const action = fetchUserReposRequest();
    const newState = userReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.repos).to.eql([]);
  });
  it('handles FETCH_USERREPOS_SUCCESS', () => {
    const prevState = userReducer(undefined, fetchUserReposRequest());
    const data = [1, 2, 3];
    const action = fetchUserReposSuccess(data);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.repos).to.eql(data);
    expect(newState.repos).to.not.equal(prevState.repos);
  });
  it('handles FETCH_USERREPOS_FAILURE', () => {
    const prevState = userReducer(undefined, fetchUserReposRequest());
    const error = 'Something went wrong';
    const action = fetchUserReposFailure(error);
    const newState = userReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.repos).to.eql([]);
    expect(newState.repos).to.not.equal(prevState.repos);
  });
});
