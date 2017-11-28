import { combineReducers } from 'redux';
import articles from './articles';
import article from './article';
import comments from './comments';

const reducer = combineReducers({
    articles, article, comments
});

export default reducer;