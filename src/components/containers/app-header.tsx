import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Button } from "../views/button.view";
import { getPosts } from '../../store/actions/post-get.action';
import { displayForm, displayList } from '../../store/actions/display-form.action';
import { displayAllPosts, displayValidPosts } from '../../store/actions/display-valid-posts.action';
import FiltersContainer from "./filters.container";
import { StoreType } from "../../models/redux-store.model";
import { changeListPage } from '../../store/actions/list-page-change.action';

export const AppHeader = (props: PropsFromRedux) => {

    const [displayFilter, setDisplayFilter] = useState<boolean>(false);

    const {
        displayCreationPosts,
        displayForm, 
        displayList,
        getPosts,  
        displayValidPosts,
        displayAllPosts,
        changeListPage } = props;

    useEffect(() => {
        displayCreationPosts && setDisplayFilter(false);
    }, [displayCreationPosts]);

    const handleFilterDisplay = () => 
        setDisplayFilter((prevDisplayFilter) => !prevDisplayFilter);

    const handleCreatePost = () => {
        if(!displayCreationPosts){
            displayForm();
            return;
        } 
        
        changeListPage(1);
        displayList();
    }
        
    const handleFilterChanged = ({target}: {target: HTMLInputElement}) => {
        target.checked ? 
           displayValidPosts() :
           displayAllPosts();
        getPosts(1, target.checked);
    }

    return (
        <header className='header p-3'>
            <h1 className='display-4'>Posts</h1>
            
            <Button text={ !displayCreationPosts ? 'Create Post' : 'View Posts'} 
                    onClick={handleCreatePost} 
                    btnClass='btn btn-primary' />

            <Button text='Filter' 
                    onClick={handleFilterDisplay} 
                    btnClass={ 'btn btn-primary ml-3' + 
                        (displayCreationPosts ? ' invisible' : ' visible') } 
                    icon='bi bi-filter' />  
           
            <FiltersContainer   displayFilter={displayFilter} 
                                onFilterChanged={handleFilterChanged}/> 
        </header>
    );
}

const mapStateToProps = (store: StoreType) => ({
    displayCreationPosts: store.postFormState.isFormDisplay
  });

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators(
        { 
            displayForm,
            displayList,
            displayValidPosts,
            getPosts,
            displayAllPosts,
            changeListPage 
        }, 
    dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(AppHeader);