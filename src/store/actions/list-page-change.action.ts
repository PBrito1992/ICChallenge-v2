import { Action } from "../../models/action.model";
import * as actions from './actions.types';

export const changeListPage = (page: number): Action<number> => ({
    type: actions.CHANGE_LIST_PAGE,
    data: page
});