import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import articleReducer from './articleReducer';
import commentsReducer from './commentsReducer';

const reducer = combineReducers({
    articlesReducer, articleReducer, commentsReducer
});

export default reducer;