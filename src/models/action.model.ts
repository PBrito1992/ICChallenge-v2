import { ActionTypes } from "../store/actions/actions.types";

export interface Action<T>{
    type: ActionTypes,
    data: T
}