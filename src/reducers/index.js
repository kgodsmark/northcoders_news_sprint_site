import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import articleReducer from './articleReducer';
import commentsReducer from './commentsReducer';
import topicsReducer from './topicsReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
    articlesReducer, articleReducer, commentsReducer, topicsReducer, userReducer
});

export default reducer;