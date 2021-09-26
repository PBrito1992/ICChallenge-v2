import { PostServerResponse } from "./post-server-response.model";

export interface PostsState extends PostServerResponse{
    isLoaded: boolean,
}