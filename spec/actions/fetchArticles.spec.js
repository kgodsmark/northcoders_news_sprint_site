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

describe('getArticles actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('dispatches FETCH_ARTICLES_SUCCESS when fetching the articles data. Responds with 200 and data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [1,2,3],
      });
    });
    
      const expectedActions = [
        fetchArticlesRequest(),
        fetchArticlesSuccess([1, 2, 3])
      ];

    const store = mockStore()

    return store.dispatch(fetchArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});