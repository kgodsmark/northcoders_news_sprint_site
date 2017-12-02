import expect from 'expect';
import clearArticle from '../../src/actions/clearArticle';
import * as types from '../../src/actions/types'

describe('clearArticle action', () => {
    it('should send an action to clear the article', () => {
        const expectedAction = {
            type: types.CLEAR_ARTICLE
        }
        expect(clearArticle().type).toEqual(expectedAction.type)
    });
});
