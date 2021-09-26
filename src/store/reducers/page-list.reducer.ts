import { Action } from '../../models/action.model';
import { SelectedPageState } from '../../models/selected-page-state.model';
import * as Actions from '../actions/actions.types';

const initialState: SelectedPageState = {
    selectedPage: 1
  };

export const pageListReducer = (state = initialState, action: Action<boolean>) => {
    switch (action.type) {
        case Actions.CHANGE_LIST_PAGE:
            return { selectedPage: action.data };
        default:
            return state;
    }
};
