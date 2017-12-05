import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import fetchUserRepos, {
  fetchUserReposRequest,
  fetchUserReposSuccess,
  fetchUserReposFailure
} from '../../src/actions/fetchUserRepos';

import API_URL from '../../src/api_url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('fetchUserRepos actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('dispatches FETCH_USERREPOS_SUCCESS, responding with 200 and data', () => {
    moxios.stubRequest(`${API_URL}/users/12345/repos`, {
      status: 200,
      response: {articles:[1, 2, 3]},
    });

    const expectedActions = [
      fetchUserReposRequest(),
      fetchUserReposSuccess([1, 2, 3])
    ];

    const store = mockStore();

    return store.dispatch(fetchUserRepos('12345')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches FETCH_USERREPOS_FAILURE, responding with an error', () => {
    const error = new Error('Error: Request failed with status code 400');

    moxios.stubRequest(`${API_URL}/users/none/repos`, {
      status: 400,
      response: { error }
    });

    const expectedActions = [
      fetchUserReposRequest(),
      fetchUserReposFailure({ 'error': error })
    ];

    const store = mockStore();

    return store.dispatch(fetchUserRepos('none'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

  });

});
