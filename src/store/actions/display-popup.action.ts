import { Action, ActionType } from '../../models/action.model';
import { PopupData } from '../../models/popup.model';
import * as actions from './actions.types';

export const displayPopup = (message: string, isSuccess: boolean = true)
    : Action<Partial<PopupData>> => 
    ({
        type: actions.DISPLAY_POPUP,
        data: {
            message,
            isSuccess
        }
    });

export const closePopup = (): ActionType => 
    ({ type: actions.CLOSE_POPUP });