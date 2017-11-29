import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import articleReducer from './articleReducer';
import commentsReducer from './commentsReducer';
import topicsReducer from './topicsReducer';

const reducer = combineReducers({
    articlesReducer, articleReducer, commentsReducer, topicsReducer
});

export default reducer;