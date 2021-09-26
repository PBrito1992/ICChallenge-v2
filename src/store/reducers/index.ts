import { combineReducers } from 'redux';
import { filterReducer } from './filter.reducer';
import { loadingReducer } from './loading.reducer';
import { pageListReducer } from './page-list.reducer';
import { popupReducer } from './popup.reducer';
import { postFormReducer } from './post-form.reducer';
import { postsReducer } from './post.reducer';

export const Reducers = combineReducers({
    postsState: postsReducer,
    postFormState: postFormReducer,
    filterState: filterReducer,
    pageListState: pageListReducer,
    loadingState: loadingReducer,
    popupState: popupReducer
});
