import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Button } from "../views/button.view";
import { getPosts } from '../../store/actions/post-get.action';
import { displayPostForm } from '../../store/actions/display-form.action';
import { changeFilterValue } from '../../store/actions/filter-changed.action';
import FiltersContainer from "./filters.container";

export const AppHeader = (props: PropsFromRedux) => {

    const [displayFilter, setDisplayFilter] = useState<boolean>(false);
    const [createPost, setCreatePost] = useState<boolean>(false);

    const {
        displayCreationPosts,
        displayPostForm, 
        getPosts,  
        changeFilterValue} = props;

    const handleFilterDisplay = () => 
        setDisplayFilter((prevDisplayFilter) => !prevDisplayFilter);

    const handleCreatePost = () => 
        setCreatePost((prevCreatePost: boolean) => {
            displayPostForm(!prevCreatePost);
            return !prevCreatePost;
        });
        
    const handleFilterChanged = ({target}: {target: HTMLInputElement}) => {
        changeFilterValue(target.checked);
        getPosts(1, target.checked);
    }
    

    return (
        <header>
            <h1>Posts</h1>
            <Button text={ !createPost ? 'Create Post' : 'View Posts'} 
                    onClick={handleCreatePost} 
                    btnClass='btn btn-primary' />

            {
                !displayCreationPosts ? 
                    <Button text='Filter' 
                            onClick={handleFilterDisplay} 
                            btnClass='btn btn-primary ml-3' 
                            icon='bi bi-filter' /> : 
                    <></>
            }
           
            <FiltersContainer   displayFilter={displayFilter} 
                                onFilterChanged={handleFilterChanged}/>
                
        </header>
    );
}

const mapStateToProps = (store: any) => ({
    displayCreationPosts: store.postFormState.toDisplay
  });

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators(
        { 
            displayPostForm,
            changeFilterValue,
            getPosts 
        }, 
    dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(AppHeader);