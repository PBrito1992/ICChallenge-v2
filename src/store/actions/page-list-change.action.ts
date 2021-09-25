import { Action } from "../../models/action.model";
import * as actions from './actions.types';

export const changePageList = (page: number): Action<number> => ({
    type: actions.CHANGE_PAGE_LIST,
    data: page
});