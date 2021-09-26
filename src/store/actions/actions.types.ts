export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DISPLAY_POSTS_FORM = 'DISPLAY_POSTS_FORM';
export const DISPLAY_POSTS_LIST = 'DISPLAY_POSTS_LIST';
export const DISPLAY_ALL_POSTS = 'DISPLAY_ALL_POSTS';
export const DISPLAY_VALID_POSTS = 'DISPLAY_VALID_POSTS';
export const CHANGE_LIST_PAGE = 'CHANGE_LIST_PAGE';
export const SET_LOADING_ON = 'SET_LOADING_ON';
export const SET_LOADING_OFF = 'SET_LOADING_OFF';
export const DISPLAY_POPUP = 'DISPLAY_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export type ActionTypes = 
    typeof GET_POSTS | 
    typeof ADD_POST | 
    typeof DISPLAY_POSTS_LIST | 
    typeof DISPLAY_POSTS_FORM | 
    typeof DISPLAY_ALL_POSTS |
    typeof DISPLAY_VALID_POSTS |
    typeof CHANGE_LIST_PAGE |
    typeof SET_LOADING_ON |
    typeof SET_LOADING_OFF |
    typeof DISPLAY_POPUP |
    typeof CLOSE_POPUP;