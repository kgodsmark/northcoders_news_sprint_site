import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import fetchArticles, {
  fetchArticlesRequest,
  fetchArticlesSuccess,
  fetchArticlesFailure
} from '../../src/actions/fetchArticles';

import API_URL from '../../src/api_url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('fetchArticles actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('dispatches FETCH_ARTICLES_SUCCESS, responding with 200 and data', () => {
    moxios.stubRequest(`${API_URL}/articles`, {
      status: 200,
      response: {articles:[1, 2, 3]},
    });

    const expectedActions = [
      fetchArticlesRequest(),
      fetchArticlesSuccess([1, 2, 3])
    ];

    const store = mockStore();

    return store.dispatch(fetchArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches FETCH_ARTICLES_FAILURE, responding with an error', () => {
    const error = new Error('Error: Request failed with status code 400');

    moxios.stubRequest(`${API_URL}/articles`, {
      status: 400,
      response: { error }
    });

    const expectedActions = [
      fetchArticlesRequest(),
      fetchArticlesFailure({ 'error': error })
    ];

    const store = mockStore();

    return store.dispatch(fetchArticles())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('dispatches FETCH_ARTICLES_SUCCESS when requesting by topic, responding with 200 and data', () => {
    moxios.stubRequest(`${API_URL}/topics/football/articles`, {
      status: 200,
      response: {articles:[1, 2, 3]},
    });

    const expectedActions = [
      fetchArticlesRequest(),
      fetchArticlesSuccess([1, 2, 3])
    ];

    const store = mockStore();

    return store.dispatch(fetchArticles('football')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches FETCH_ARTICLES_FAILURE when requesting by topic, responding with an error', () => {
    const error = new Error('Error: Request failed with status code 400');

    moxios.stubRequest(`${API_URL}/topics/wrong/articles`, {
      status: 400,
      response: { error }
    });

    const expectedActions = [
      fetchArticlesRequest(),
      fetchArticlesFailure({ 'error': error })
    ];

    const store = mockStore();

    return store.dispatch(fetchArticles('wrong'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
