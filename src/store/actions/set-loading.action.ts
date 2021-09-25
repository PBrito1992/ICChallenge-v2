import { Action } from '../../models/action.model';
import * as actions from './actions.types';

export const setLoading = (isLoading: boolean): Action<boolean> => ({
        type: actions.SET_LOADING,
        data: isLoading
    });