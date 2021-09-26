import { ActionType } from '../../models/action.model';
import { LoadingState } from '../../models/loading-state.model';
import * as Actions from '../actions/actions.types';

const initialState: LoadingState = {
    isLoading: false
  };

export const loadingReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case Actions.SET_LOADING_ON:
            return { isLoading: true };
        case Actions.SET_LOADING_OFF:
            return { isLoading: false };
        default:
            return state;
    }
};
