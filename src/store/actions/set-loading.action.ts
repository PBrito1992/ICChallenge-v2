import { ActionType } from '../../models/action.model';
import * as actions from './actions.types';

export const activateLoading = (): ActionType =>
    ({ type: actions.SET_LOADING_ON });

export const disableLoading = (): ActionType => 
    ({ type: actions.SET_LOADING_OFF });