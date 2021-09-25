export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DISPLAY_POSTS_FORM = 'DISPLAY_POSTS_FORM';
export const CHANGE_FILTER_VALUE = 'CHANGE_FILTER_VALUE';

export type ActionTypes = 
    typeof GET_POSTS | 
    typeof ADD_POST | 
    typeof DISPLAY_POSTS_FORM | 
    typeof CHANGE_FILTER_VALUE;