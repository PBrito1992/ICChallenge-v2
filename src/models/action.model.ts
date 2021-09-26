import { ActionTypes } from "../store/actions/actions.types";

export interface ActionType{
    type: ActionTypes
}

export interface Action<T> extends ActionType{
    data: T
}

