import { Action } from '../../models/action.model';
import * as Actions from '../actions/actions.types';

const initialState = {
    isValidated: false
  };

export const filterReducer = (state = initialState, action: Action<boolean>) => {
    switch (action.type) {
        case Actions.CHANGE_FILTER_VALUE:
            return { isValidated: action.data };
        default:
            return state;
    }
};
