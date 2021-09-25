import { Action } from '../../models/action.model';
import * as Actions from '../actions/actions.types';

const initialState = {
    isLoading: false
  };

export const loadingReducer = (state = initialState, action: Action<boolean>) => {
    switch (action.type) {
        case Actions.SET_LOADING:
            return { isLoading: action.data };
        default:
            return state;
    }
};
