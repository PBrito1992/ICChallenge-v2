import { PostItem } from "../views/post-item.view";
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getPosts } from '../../store/actions/post-get.action';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { GroupedVirtuoso, GroupedVirtuosoHandle, Virtuoso } from "react-virtuoso";

export const PostListContainer = (props: PropsFromRedux) => {

    const {
        posts, 
        isPostsLoaded, 
        nextPage, 
        displayValidatedPosts,
        selectedPage,
        getPosts } = props;

    const [scroll, setScroll ] = useState(false);
    const virtuoso = useRef<GroupedVirtuosoHandle>(null)

    useEffect(() => {
        !isPostsLoaded && getPosts(1, false)
    }, []);

    useEffect(() => {
        if(scroll && virtuoso && virtuoso?.current)   {
            virtuoso.current.scrollToIndex({
                align: 'start',
                behavior: 'smooth',
                index: posts.length - 20,
            });
            setScroll(false);
        }
    }, [scroll, posts])

    useEffect(() => { jumpToPage(selectedPage) }, [selectedPage]);

    const loadMore = useCallback(() => {
        nextPage && getPosts(nextPage, displayValidatedPosts)
      }, [getPosts, nextPage, displayValidatedPosts]);


    const jumpToPage = async (page: number) => {
        if(nextPage <= page){
            const promiseArr = [];
            for(let i = nextPage; i <= page; i++)
                promiseArr.push(getPosts(i, displayValidatedPosts));

            Promise.all(promiseArr).then(() => setScroll(true));
        }
    };

    return (
        <div>
        <GroupedVirtuoso
            ref={virtuoso}
            useWindowScroll
            groupCounts={Array(posts.length).fill(20)}
            data={posts}
            endReached={loadMore}
            overscan={200}
            groupContent={ (index) => <span className='invisible'>Page { index }</span> }
            itemContent={index => <PostItem post={posts[index]} key={`post_${index}`} /> }
        />
        </div>
    );
}

const mapStateToProps = (store: any) => ({
    posts: store.serverResponseState.posts,
    nextPage: store.serverResponseState.next_page,
    isPostsLoaded: store.serverResponseState.isLoaded,
    displayValidatedPosts: store.filterState.isValidated,
    selectedPage: store.pageListState.selectedPage
  });
  
const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators({ getPosts }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(PostListContainer);