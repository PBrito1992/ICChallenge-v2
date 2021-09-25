import { Post } from '../../models/post.model';
import * as actions from './actions.types';
import * as PostService from '../../services/post.service';
import { PostCreate } from '../../models/post-create.model';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import { Action } from '../../models/action.model';

export const addPost = (newPost: PostCreate) => {
    
    // return (dispatch: Dispatch) => PostService.createPost(newPost)
    //     .then(({data}) => dispatch(addNewPost(data.posts)));

    return async (dispatch: Dispatch) => {
        const serverResponse: AxiosResponse<Post> = await PostService.createPost(newPost);

        console.log(serverResponse)

        dispatch(newPostCreate(serverResponse.data));
    }
}

const newPostCreate = (post: Post): Action<Post> => ({
    type: actions.ADD_POST,
    data: post
});