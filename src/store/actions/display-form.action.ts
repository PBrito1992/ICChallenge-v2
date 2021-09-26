import { Action, ActionType } from '../../models/action.model';
import * as actions from './actions.types';

export const displayList = (): ActionType => 
    ({ type: actions.DISPLAY_POSTS_LIST });

export const displayForm = (): ActionType => 
    ({ type: actions.DISPLAY_POSTS_FORM });