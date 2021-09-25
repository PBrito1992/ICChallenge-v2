import axios, { AxiosResponse } from "axios";
import { PostCreate } from "../models/post-create.model";
import { PostServerResponse } from "../models/post-server-response.model";

const API_ENDPOINT = '/api/posts';

export const getPosts = (page: number = 1, filter?: boolean)
    : Promise<AxiosResponse<PostServerResponse>> => {

    let api_url = API_ENDPOINT;
    api_url += `?page=${page}`;

    if(!!filter)
        api_url += `&filter=validated`;

    return axios.get<PostServerResponse>(api_url);
}

export const createPost = (newPost: PostCreate) => 
    axios.post(API_ENDPOINT, newPost);