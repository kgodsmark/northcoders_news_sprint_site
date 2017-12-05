import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import postComment, {
  postCommentRequest,
  postCommentSuccess,
  postCommentFailure
} from '../../src/actions/postComment';

import API_URL from '../../src/api_url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('postComment actions', () => {

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
      postCommentRequest(),
      postCommentSuccess([1, 2, 3])
    ];

    const store = mockStore();

    return store.dispatch(postComment('12345', 'this is a comment', 'test username')).then(() => {
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
      postCommentRequest(),
      postCommentFailure({ 'error': error})
    ];

    const store = mockStore();

    return store.dispatch(postComment('none', 'this is a comment', 'test username'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
