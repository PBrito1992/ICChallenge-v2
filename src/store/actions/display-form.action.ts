import { Action } from '../../models/action.model';
import * as actions from './actions.types';

export const displayPostForm = (toDisplay: boolean): Action<boolean> => ({
        type: actions.DISPLAY_POSTS_FORM,
        data: toDisplay
    });