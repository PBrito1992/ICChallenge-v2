import { ActionType } from '../../models/action.model';
import * as actions from './actions.types';

export const displayAllPosts = (): ActionType => ({
    type: actions.DISPLAY_ALL_POSTS
});

export const displayValidPosts = (): ActionType => ({
    type: actions.DISPLAY_VALID_POSTS
});