import { PostItem } from "../views/post-item.view";
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getPosts } from '../../store/actions/post-get.action';
import { useCallback, useEffect } from "react";
import { Virtuoso } from "react-virtuoso";

export const PostListContainer = (props: PropsFromRedux) => {

    const {
        posts, 
        isPostsLoaded, 
        nextPage, 
        displayValidatedPosts,
        getPosts } = props;

    useEffect(() => {
        !isPostsLoaded && getPosts(1, false)
    }, []);

    const loadMore = useCallback(() => {
        nextPage && getPosts(nextPage, displayValidatedPosts)
      }, [getPosts, nextPage, displayValidatedPosts]);

    return (
        <Virtuoso
            style={{height: '300px'}}
            useWindowScroll
            data={posts}
            endReached={loadMore}
            overscan={200}
            itemContent={(index, post) => <PostItem post={post} key={`post_${index}`} /> }
            components={{
            Footer: () => {
                return (
                    !!nextPage ? 
                        <div className='d-block mx-auto my-3 spinner-border text-primary'></div> : 
                        <></>
                );
            }
            }}
        />
    );
}

const mapStateToProps = (store: any) => ({
    posts: store.serverResponseState.posts,
    nextPage: store.serverResponseState.next_page,
    isPostsLoaded: store.serverResponseState.isLoaded,
    displayValidatedPosts: store.filterState.isValidated
  });
  
const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators({ getPosts }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(PostListContainer);