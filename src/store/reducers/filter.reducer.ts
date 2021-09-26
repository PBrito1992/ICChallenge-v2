import { ActionType } from '../../models/action.model';
import { FilterState } from '../../models/filter-state.model';
import * as Actions from '../actions/actions.types';

const initialState: FilterState = {
    isValidated: false
  };

export const filterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case Actions.DISPLAY_ALL_POSTS:
            return { isValidated: false };
        case Actions.DISPLAY_VALID_POSTS:
            return { isValidated: true };
        default:
            return state;
    }
};
