import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import changeCommentVote, {
  changeCommentVoteRequest,
  changeCommentVoteSuccess,
  changeCommentVoteFailure
} from '../../src/actions/changeCommentVote';

import API_URL from '../../src/api_url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('changeCommentVote actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('dispatches PATCH_COMMENT_SUCCESS, responding with 200 and data', () => {
    moxios.stubRequest(`${API_URL}/comments/12345?vote=up`, {
      method: 'patch',
      status: 200,
      response: {comment:[1, 2, 3]},
    });

    const expectedActions = [
      changeCommentVoteRequest(),
      changeCommentVoteSuccess([1, 2, 3])
    ];

    const store = mockStore()

    return store.dispatch(changeCommentVote('12345','up')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  it('dispatches PATCH_COMMENT_FAILURE, responding with an error', () => {
    const error = new Error('Error: Request failed with status code 400');
    
    moxios.stubRequest(`${API_URL}/comments/none?vote=up`, {
       status: 400,
       response: { error }
    });

    const expectedActions = [
      changeCommentVoteRequest(),
      changeCommentVoteFailure({ 'error': error})
    ];

    const store = mockStore();

    return store.dispatch(changeCommentVote('none', 'up'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});