import { Action } from '../../models/action.model';
import { PopupData } from '../../models/popup.model';
import * as actions from './actions.types';

export const displayPopup = (toDisplay: boolean, message?: string, isSuccess: boolean = true)
    : Action<Partial<PopupData>> => ({
        type: actions.DISPLAY_POPUP,
        data: {
            message,
            isSuccess,
            toDisplay
        }
    });