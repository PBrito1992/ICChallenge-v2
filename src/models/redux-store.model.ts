import { EmptyObject } from "redux";
import { FilterState } from "./filter-state.model";
import { LoadingState } from "./loading-state.model";
import { PopupState } from "./popup-state.model";
import { PostFormState } from "./post-form-state.model";
import { PostsState } from "./posts-state.model";
import { SelectedPageState } from "./selected-page-state.model";

export type StoreType = EmptyObject & {
    postsState: PostsState;
    postFormState: PostFormState;
    filterState: FilterState;
    pageListState: SelectedPageState;
    loadingState: LoadingState;
    popupState: PopupState;
}