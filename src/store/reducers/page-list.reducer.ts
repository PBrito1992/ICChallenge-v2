import { Action } from '../../models/action.model';
import * as Actions from '../actions/actions.types';

const initialState = {
    selectedPage: 1
  };

export const pageListReducer = (state = initialState, action: Action<boolean>) => {
    switch (action.type) {
        case Actions.CHANGE_PAGE_LIST:
            return { selectedPage: action.data };
        default:
            return state;
    }
};
