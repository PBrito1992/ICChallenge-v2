import { ActionType } from '../../models/action.model';
import { PostFormState } from '../../models/post-form-state.model';
import * as Actions from '../actions/actions.types';

const initialState: PostFormState = {
    isFormDisplay: false
  };

export const postFormReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case Actions.DISPLAY_POSTS_LIST:
            return { isFormDisplay: false };
        case Actions.DISPLAY_POSTS_FORM:
            return { isFormDisplay: true };
        default:
            return state;
    }
};