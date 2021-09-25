import { ChangeEventHandler, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { FilterOption } from "../views/filter-option.view";
import { changePageList } from '../../store/actions/page-list-change.action';

export const FiltersContainer = (props: FiltersPropsType) => {

    const [filterOptions, setFilterOptions] = useState<JSX.Element[]>([]);

    const {
        totalPages,
        displayValidatedPosts,
        selectedPage,
        changePageList,
        onFilterChanged } = props;

    useEffect(() => {
        const options: JSX.Element[] = [];
        for(let i = 1; i <= totalPages; i++)
            options.push(<option value={i}>{i}</option>)
        
        setFilterOptions(options);
    }, [totalPages]);

    const handlePageChange = ({target}: {target: HTMLSelectElement}) => {
        changePageList(+target.value);
    }

    return (
        <div>
            {
                props.displayFilter ? 
                    <div className='d-flex align-items-center mt-3'>
                        <FilterOption onClick={onFilterChanged} 
                                value={displayValidatedPosts} />

                        <select name="cars" 
                                className="custom-select ml-3 btn-size"
                                value={selectedPage}
                                onChange={handlePageChange}>
                            <option disabled>Select Page</option>
                            { filterOptions }
                        </select>
                    </div> : 
                    <></>
            }
        </div>
    );
}

const mapStateToProps = (store: any) => ({
    displayValidatedPosts: store.filterState.isValidated,
    totalPages: store.serverResponseState.total_pages,
    selectedPage: store.pageListState.selectedPage
  });

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators({ changePageList }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type FiltersPropsType = PropsFromRedux & {
    displayFilter: boolean,
    onFilterChanged: ChangeEventHandler<HTMLInputElement>
};
export default connector(FiltersContainer);