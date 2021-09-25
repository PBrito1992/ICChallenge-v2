import { Action } from '../../models/action.model';
import * as Actions from '../actions/actions.types';

const initialState = {
    toDisplay: false
  };

export const postFormReducer = (state = initialState, action: Action<boolean>) => {
    switch (action.type) {
        case Actions.DISPLAY_POSTS_FORM:
            return { toDisplay: action.data };
        default:
            return state;
    }
};