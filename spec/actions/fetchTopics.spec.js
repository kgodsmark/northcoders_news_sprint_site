import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import fetchTopics, {
  fetchTopicsRequest,
  fetchTopicsSuccess,
  fetchTopicsFailure
} from '../../src/actions/fetchTopics';

import API_URL from '../../src/api_url';
import { request } from 'https';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('fetchTopics actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('dispatches FETCH_TOPICS_SUCCESS, responding with 200 and data', () => {
    moxios.stubRequest(`${API_URL}/topics`, {
      status: 200,
      response: {topics: [1, 2, 3]},
    });

    const expectedActions = [
      fetchTopicsRequest(),
      fetchTopicsSuccess([1, 2, 3])
    ];

    const store = mockStore();

    return store.dispatch(fetchTopics()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches FETCH_TOPICS_FAILURE, responding with an error', () => {
    const error = new Error('Error: Request failed with status code 400');

    moxios.stubRequest(`${API_URL}/topics`, {
      status: 400,
      response: { error }
    });

    const expectedActions = [
      fetchTopicsRequest(),
      fetchTopicsFailure({ 'error': error })
    ];

    const store = mockStore();

    return store.dispatch(fetchTopics())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});