import { Action } from '../../models/action.model';
import { PostServerResponse } from '../../models/post-server-response.model';
import { PostsState } from '../../models/posts-state.model';
import * as Actions from '../actions/actions.types';

const initialState: PostsState = {
    posts: [],
    isLoaded: false
  };
  
export const postsReducer = (state = initialState, action: Action<PostServerResponse>) => {
    switch (action.type) {
        case Actions.GET_POSTS:
            return updateGetPosts(state, action);
        case Actions.ADD_POST:
            return updateNewPost(state, action);
        default:
            return state;
    }
};

const updateGetPosts = (state: PostsState, action: Action<PostServerResponse>) => {
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
}

const updateNewPost = (state: PostsState, action: Action<PostServerResponse>) => {
    if(!!state.next_page)
        return state;

    return {
        ...state,
        posts: [
            action.data,
            ...state.posts
        ]
    };
}