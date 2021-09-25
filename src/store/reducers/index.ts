import { combineReducers } from 'redux';
import { filterReducer } from './filter.reducer';
import { postFormReducer } from './post-form.reducer';
import { postsReducer } from './post.reducer';

export const Reducers = combineReducers({
    serverResponseState: postsReducer,
    postFormState: postFormReducer,
    filterState: filterReducer
});
