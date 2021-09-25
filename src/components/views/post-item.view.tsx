import { Post as PostModel } from "../../models/post.model"

export const PostItem = ({ post }: {post: PostModel}) => {
    
    const {
        userProfileImgUrl,
        userName,
        comment,
        postedOn
    } = post;

    const postDate = new Date(postedOn).toLocaleDateString();

    return (
        <article className="media border-bottom mt-1 p-3">
            
            <img    src={ userProfileImgUrl } 
                    alt={ userName } 
                    className="mr-3 mt-3 rounded-circle profile-img" />

            <div className="media-body">
                <h4 className='d-flex justify-content-between'>
                    { userName } 
                    <small className='text-secondary'>
                        <i>Posted on { postDate }</i>
                    </small>
                </h4>
                <p>{ comment }</p>
            </div>
        </article>
    );
}
