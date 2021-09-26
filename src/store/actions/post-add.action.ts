import { Post } from '../../models/post.model';
import * as actions from './actions.types';
import * as PostService from '../../services/post.service';
import { PostCreate } from '../../models/post-create.model';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { Action } from '../../models/action.model';
import { activateLoading, disableLoading } from './set-loading.action';
import { displayPopup } from './display-popup.action';

export const addPost = (newPost: PostCreate) => {
    return async (dispatch: Dispatch) => {
        dispatch(activateLoading());
        const serverResponse: AxiosResponse<{posts: Post}> = await PostService.createPost(newPost);
        dispatch(newPostCreate(serverResponse.data.posts));
        dispatch(displayPopup('Post created with success!'));
        dispatch(disableLoading());
    }
}

const newPostCreate = (post: Post): Action<Post> => ({
    type: actions.ADD_POST,
    data: post
});