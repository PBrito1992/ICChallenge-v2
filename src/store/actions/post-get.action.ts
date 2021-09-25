import { PostServerResponse } from '../../models/post-server-response.model';
import * as actions from './actions.types';
import * as PostService from '../../services/post.service';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { Action } from '../../models/action.model';

export const getPosts = (page: number, displayVerified: boolean) => {
    // return (dispatch: Dispatch) => PostService.getPosts(page, displayVerified)
    //     .then(({data}: {data: PostServerResponse}) => dispatch(setPosts(data)));

    return async (dispatch: Dispatch) => {
        const serverResponse: AxiosResponse<PostServerResponse> = 
            await PostService.getPosts(page, displayVerified);
        dispatch(addPosts(serverResponse.data));
    }
};

const addPosts = (serverResponse: PostServerResponse): Action<PostServerResponse> => ({
    type: actions.GET_POSTS,
    data: serverResponse
});
