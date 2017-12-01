import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import changeArticleVote, {
  changeArticleVoteRequest,
  changeArticleVoteSuccess,
  changeArticleVoteFailure
} from '../../src/actions/changeArticleVote';

import API_URL from '../../src/api_url';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('changeArticleVote actions', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('dispatches PUT_ARTICLE_SUCCESS, responding with 200 and data', () => {
    moxios.stubRequest(`${API_URL}/articles/12345?vote=up`, {
      method: 'patch',
      status: 200,
      response: {article:[1, 2, 3]},
    });

    const expectedActions = [
      changeArticleVoteRequest(),
      changeArticleVoteSuccess([1, 2, 3])
    ];

    const store = mockStore()

    return store.dispatch(changeArticleVote('12345','up')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  it('dispatches PUT_ARTICLE_FAILURE, responding with an error', () => {
    const error = new Error('Error: Request failed with status code 400');
    
    moxios.stubRequest(`${API_URL}/articles/none?vote=up`, {
       status: 400,
       response: { error }
    });

    const expectedActions = [
      changeArticleVoteRequest(),
      changeArticleVoteFailure({ 'error': error})
    ];

    const store = mockStore();

    return store.dispatch(changeArticleVote('none', 'up'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});