import { Action } from '../../models/action.model';
import { PopupState } from '../../models/popup-state.model';
import { PopupData } from '../../models/popup.model';
import * as Actions from '../actions/actions.types';

const initialState: PopupState = {
    message: '',
    isSuccess: false,
    toDisplay: false
  };

export const popupReducer = (state = initialState, action: Action<Partial<PopupData>>) => {
    switch (action.type) {
        case Actions.DISPLAY_POPUP:
            return { ...action.data, toDisplay: true };
        case Actions.CLOSE_POPUP:
            return initialState;
        default:
            return state;
    }
};
