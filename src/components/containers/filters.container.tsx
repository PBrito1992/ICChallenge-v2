import { ChangeEventHandler, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Checkbox } from "../views/checkbox.view";
import { changeListPage } from '../../store/actions/list-page-change.action';
import { Select } from "../views/select.view";
import { StoreType } from "../../models/redux-store.model";

export const FiltersContainer = (props: FiltersPropsType) => {

    const [pageOptions, setPageOptions] = useState<JSX.Element[]>([]);

    const {
        displayFilter,
        totalPages,
        displayValidatedPosts,
        selectedPage,
        changeListPage,
        onFilterChanged } = props;

    const filterDisplayClass = 
        displayFilter ? ' d-flex animate-filter-open' : ' d-none';

    useEffect(() => {
        if(!totalPages)
            return;

        const options: JSX.Element[] = [];
        for(let i = 1; i <= totalPages; i++)
            options.push(<option value={i} key={i}>{i}</option>)
        
        setPageOptions(options);
    }, [totalPages]);

    const handlePageChange = ({target}: {target: HTMLSelectElement}) => 
        changeListPage(+target.value);

    return (
        <div className={'align-items-center mt-3' + filterDisplayClass}>
            <Checkbox   name='isValidated'
                        label='Display Validated Posts'
                        onClick={onFilterChanged} 
                        value={displayValidatedPosts} />

            <Select name='pages'        
                    value={selectedPage.toString()}
                    handlePageChange={ handlePageChange }
                    defaultText='Select Page'
                    options={pageOptions}/>
        </div> 
    );
}

const mapStateToProps = (store: StoreType) => ({
    displayValidatedPosts: store.filterState.isValidated,
    totalPages: store.postsState.total_pages,
    selectedPage: store.pageListState.selectedPage
  });

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators({ changeListPage }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>
type FiltersPropsType = PropsFromRedux & {
    displayFilter: boolean,
    onFilterChanged: ChangeEventHandler<HTMLInputElement>
};

export default connector(FiltersContainer);