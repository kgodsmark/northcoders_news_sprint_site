import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import fetchArticle, {
  fetchArticleRequest,
  fetchArticleSuccess,
  fetchArticleFailure
} from '../../src/actions/fetchArticle';

import API_URL from '../../src/api_url';
import { request } from 'https';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('fetchArticle actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('dispatches FETCH_ARTICLE_SUCCESS, responding with 200 and data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [1, 2, 3],
      });
    });

    const expectedActions = [
      fetchArticleRequest(),
      fetchArticleSuccess([1, 2, 3])
    ];

    const store = mockStore()

    return store.dispatch(fetchArticle()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches FETCH_ARTICLE_FAILURE, responding with an error', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: 'error'
      });
    });

    const expectedActions = [
      fetchArticleRequest(),
      fetchArticleFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(fetchArticle())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });

  });

});