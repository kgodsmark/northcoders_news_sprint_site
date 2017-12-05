import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import deleteComment, {
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure
} from '../../src/actions/deleteComment';

import API_URL from '../../src/api_url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('deleteComment actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('dispatches DELETE_COMMENT_SUCCESS, responding with 200 and data', () => {
    moxios.stubRequest(`${API_URL}/comments/12345`, {
      method: 'delete',
      status: 200,
      response: {comments:[1, 2, 3]},
    });

    const expectedActions = [
      deleteCommentRequest(),
      deleteCommentSuccess([1, 2, 3])
    ];

    const store = mockStore();

    return store.dispatch(deleteComment('12345')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  it('dispatches DELETE_COMMENT_FAILURE, responding with an error', () => {
    const error = new Error('Error: Request failed with status code 400');
    
    moxios.stubRequest(`${API_URL}/comments/none`, {
      status: 400,
      response: { error }
    });

    const expectedActions = [
      deleteCommentRequest(),
      deleteCommentFailure({ 'error': error})
    ];

    const store = mockStore();

    return store.dispatch(deleteComment('none'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
