import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import fetchComments, {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFailure
} from '../../src/actions/fetchComments';

import API_URL from '../../src/api_url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('fetchComments actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('dispatches FETCH_COMMENTS_SUCCESS, responding with 200 and data', () => {
    moxios.stubRequest(`${API_URL}/articles/12345/comments`, {
      status: 200,
      response: [1, 2, 3],
    });

    const expectedActions = [
      fetchCommentsRequest(),
      fetchCommentsSuccess([1, 2, 3])
    ];

    const store = mockStore()

    return store.dispatch(fetchComments('12345')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});