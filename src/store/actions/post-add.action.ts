import * as actions from './actions.types';
import * as PostService from '../../services/post.service';
import { PostCreate } from '../../models/post-create.model';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { Action } from '../../models/action.model';
import { activateLoading, disableLoading } from './set-loading.action';
import { displayPopup } from './display-popup.action';
import { Store } from '..';
import { PostsState } from '../../models/posts-state.model';
import { PostServerResponse } from '../../models/post-server-response.model';

export const addPost = (newPost: PostCreate) => {
    return async (dispatch: Dispatch) => {
        dispatch(activateLoading());
        await PostService.createPost(newPost);
        dispatch(displayPopup('Post created with success!'));

        const postsState: PostsState = Store.getState().postsState;
        const displayVerified = Store.getState().filterState.isValidated;

        if(!!postsState.page){
            const serverResponse: AxiosResponse<PostServerResponse> = 
                await PostService.getPosts(postsState.page, displayVerified);

            dispatch(newPostCreated(serverResponse.data));
        }
        dispatch(disableLoading());
    }
}

const newPostCreated = (serverResponse: PostServerResponse): Action<PostServerResponse> => ({
    type: actions.ADD_POST,
    data: serverResponse
});