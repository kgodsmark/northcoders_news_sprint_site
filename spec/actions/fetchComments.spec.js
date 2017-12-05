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
      response: {comments:[1, 2, 3]},
    });

    const expectedActions = [
      fetchCommentsRequest(),
      fetchCommentsSuccess([1, 2, 3])
    ];

    const store = mockStore();

    return store.dispatch(fetchComments('12345')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  it('dispatches FETCH_COMMENTS_FAILURE, responding with an error', () => {
    const error = new Error('Error: Request failed with status code 400');
    
    moxios.stubRequest(`${API_URL}/articles/none/comments`, {
      status: 400,
      response: { error }
    });

    const expectedActions = [
      fetchCommentsRequest(),
      fetchCommentsFailure({ 'error': error})
    ];

    const store = mockStore();

    return store.dispatch(fetchComments('none'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
