import { PostItem } from "../views/post-item.view";
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getPosts } from '../../store/actions/post-get.action';
import { useCallback, useEffect, useRef, useState } from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { StoreType } from "../../models/redux-store.model";

export const PostListContainer = (props: PropsFromRedux) => {

    const {
        posts, 
        isPostsLoaded, 
        nextPage, 
        displayValidatedPosts,
        selectedPage,
        totalPosts,
        getPosts } = props;

    const [scroll, setScroll ] = useState(false);
    const virtuoso = useRef<VirtuosoHandle>(null);
    const page_size = 20;

    useEffect(() => { !isPostsLoaded && getPosts(1, false) }, []);

    useEffect(() => {
        if(!scroll || !virtuoso?.current)   
            return;

        const header_height = 145;

        virtuoso.current.scrollToIndex({
            align: 'start',
            offset: -header_height,
            index: (selectedPage - 1) * page_size,
        });

        setScroll(false);

    }, [scroll])

    useEffect(() => { isPostsLoaded && jumpToPage(selectedPage) }, [selectedPage]);

    const loadMore = useCallback(() => {
        nextPage && getPosts(nextPage, displayValidatedPosts)
      }, [getPosts, nextPage, displayValidatedPosts]);


    const jumpToPage = (page: number) => {

        if(page * page_size <= posts.length || totalPosts === posts.length){
            setScroll(true);
            return;
        }

        if(!!nextPage && nextPage <= page){
            const promiseArr = [];
            for(let i = nextPage; i <= page; i++)
                promiseArr.push(getPosts(i, displayValidatedPosts));

            Promise.all(promiseArr).then(() => setScroll(true));
        }
    };

    return (
        <Virtuoso
            ref={virtuoso}
            useWindowScroll
            data={posts}
            endReached={loadMore}
            overscan={200}
            itemContent={(index, post) => <PostItem post={post} key={ index } /> }
        />
    );
}

const mapStateToProps = (store: StoreType) => ({
    posts: store.postsState.posts,
    nextPage: store.postsState.next_page,
    isPostsLoaded: store.postsState.isLoaded,
    displayValidatedPosts: store.filterState.isValidated,
    selectedPage: store.pageListState.selectedPage,
    totalPosts: store.postsState.total
  });
  
const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators({ getPosts }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(PostListContainer);