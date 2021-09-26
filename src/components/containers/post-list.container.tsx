import { PostItem } from "../views/post-item.view";
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getPosts } from '../../store/actions/post-get.action';
import { useCallback, useEffect, useRef, useState } from "react";
import { GroupedVirtuoso, GroupedVirtuosoHandle } from "react-virtuoso";
import { StoreType } from "../../models/redux-store.model";

export const PostListContainer = (props: PropsFromRedux) => {

    const {
        posts, 
        isPostsLoaded, 
        nextPage, 
        displayValidatedPosts,
        selectedPage,
        totalPages,
        totalPosts,
        getPosts } = props;

    const [scroll, setScroll ] = useState(false);
    const virtuoso = useRef<GroupedVirtuosoHandle>(null);
    const page_size = 20;

    useEffect(() => { !isPostsLoaded && getPosts(1, false) }, []);

    useEffect(() => {
        if(!scroll || !virtuoso?.current)   
            return;

        virtuoso.current.scrollToIndex({
            align: 'center',
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
        <GroupedVirtuoso
            ref={virtuoso}
            useWindowScroll
            groupCounts={Array(totalPages).fill(page_size)}
            data={posts}
            endReached={loadMore}
            overscan={200}
            groupContent={ (index) => <span className='invisible'>Page { index }</span> }
            itemContent={index => <PostItem post={posts[index]} key={`post_${posts[index].id}`} /> }
        />
    );
}

const mapStateToProps = (store: StoreType) => ({
    posts: store.postsState.posts,
    nextPage: store.postsState.next_page,
    isPostsLoaded: store.postsState.isLoaded,
    displayValidatedPosts: store.filterState.isValidated,
    selectedPage: store.pageListState.selectedPage,
    totalPages: store.postsState.total_pages,
    totalPosts: store.postsState.total
  });
  
const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators({ getPosts }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(PostListContainer);