import { Action } from '../../models/action.model';
import { PostServerResponse } from '../../models/post-server-response.model';
import * as Actions from '../actions/actions.types';

const initialState = {
    posts: [],
    isLoaded: false
  };
  
export const postsReducer = (state = initialState, action: Action<PostServerResponse>) => {
    switch (action.type) {
        case Actions.GET_POSTS:
            if(action.data.page === 1)
                return {
                    ...action.data,
                    isLoaded: true 
                }
            else
                return {
                    ...state,
                    ...action.data,
                    posts: [
                        ...state.posts, 
                        ...action.data.posts
                    ],
                }
        case Actions.ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts, 
                    action.data
                ] 
            };
        default:
            return state;
    }
};
