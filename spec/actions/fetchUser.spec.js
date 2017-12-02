import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import fetchUser, {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure
} from '../../src/actions/fetchUser';

import API_URL from '../../src/api_url';
import { request } from 'https';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('fetchUser actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('dispatches FETCH_ARTICLE_SUCCESS, responding with 200 and data', () => {
        moxios.stubRequest(`${API_URL}/users/12345`, {
            status: 200,
            response: {user:[1, 2, 3]},
        });

        const expectedActions = [
            fetchUserRequest(),
            fetchUserSuccess([1, 2, 3])
        ];

        const store = mockStore()

        return store.dispatch(fetchUser('12345')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('dispatches FETCH_ARTICLE_FAILURE, responding with an error', () => {
        const error = new Error('Error: Request failed with status code 400');

        moxios.stubRequest(`${API_URL}/users/12345`, {
            status: 400,
            response: { error }
        });

        const expectedActions = [
            fetchUserRequest(),
            fetchUserFailure({ 'error': error })
        ];

        const store = mockStore();

        return store.dispatch(fetchUser('12345'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });

    });

});