export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DISPLAY_POSTS_FORM = 'DISPLAY_POSTS_FORM';
export const CHANGE_FILTER_VALUE = 'CHANGE_FILTER_VALUE';
export const CHANGE_PAGE_LIST = 'CHANGE_PAGE_LIST';
export const SET_LOADING = 'SET_LOADING';
export const DISPLAY_POPUP = 'DISPLAY_POPUP';

export type ActionTypes = 
    typeof GET_POSTS | 
    typeof ADD_POST | 
    typeof DISPLAY_POSTS_FORM | 
    typeof CHANGE_FILTER_VALUE |
    typeof CHANGE_PAGE_LIST |
    typeof SET_LOADING |
    typeof DISPLAY_POPUP;