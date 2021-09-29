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
            return updateStateAfterNewPost(state, action);
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

const updateStateAfterNewPost = 
    (state: PostsState, {data}: Action<PostServerResponse>) => {

    const newPosts = data.posts
                        .filter(post => !state.posts
                            .map(post => post.id)
                            .includes(post.id));

    return {
        ...state,
        ...data,
        posts: [
            ...state.posts, 
            ...newPosts
        ]
    };
}