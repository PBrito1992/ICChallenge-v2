import { Action } from '../../models/action.model';
import { PopupData } from '../../models/popup.model';
import * as Actions from '../actions/actions.types';

const initialState = {
    message: '',
    isSuccess: false,
    display: false
  };

export const popupReducer = (state = initialState, action: Action<Partial<PopupData>>) => {
    switch (action.type) {
        case Actions.DISPLAY_POPUP:
            return { ...action.data };
        default:
            return state;
    }
};
