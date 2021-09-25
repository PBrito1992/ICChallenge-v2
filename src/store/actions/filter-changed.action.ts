import { Action } from '../../models/action.model';
import * as actions from './actions.types';

export const changeFilterValue = (isValidated: boolean): Action<boolean> => ({
    type: actions.CHANGE_FILTER_VALUE,
    data: isValidated
});