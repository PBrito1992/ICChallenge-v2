import { Post } from "./post.model";

export interface PostServerResponse{
    next_page?: number,
    page?: number,
    per_page?: number,
    posts: Post[],
    prev_page?: number,
    total?: number,
    total_pages?: number
}