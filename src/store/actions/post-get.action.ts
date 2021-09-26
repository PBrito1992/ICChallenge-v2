import { PostServerResponse } from '../../models/post-server-response.model';
import * as actions from './actions.types';
import * as PostService from '../../services/post.service';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { Action } from '../../models/action.model';
import { activateLoading, disableLoading } from './set-loading.action';

export const getPosts = (page: number, displayVerified: boolean) => {
    return async (dispatch: Dispatch) => {
        dispatch(activateLoading());
        const serverResponse: AxiosResponse<PostServerResponse> = 
            await PostService.getPosts(page, displayVerified);
        dispatch(addPosts(serverResponse.data));
        dispatch(disableLoading());
    }
};

const addPosts = (serverResponse: PostServerResponse): Action<PostServerResponse> => ({
    type: actions.GET_POSTS,
    data: serverResponse
});
