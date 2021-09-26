import { FormEvent, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { PostCreateForm } from "../views/post-create-form.view";
import { addPost } from '../../store/actions/post-add.action';
import { PostCreate } from "../../models/post-create.model";
import { StoreType } from "../../models/redux-store.model";

export const PostFormContainer = (props: PropsFromRedux) => {

    const [formValue, setFormValue] = useState<PostCreate>(new PostCreate());
    const { isPostCreateSuccess, addPost } = props;

    useEffect(() => {
        isPostCreateSuccess && setFormValue(new PostCreate());
    }, [isPostCreateSuccess]);

    const handleFormChange = ({ target }
            : {target: HTMLInputElement | HTMLTextAreaElement}) => {
        
        setFormValue((prevFormValue) => ({
            ...prevFormValue,
            [target.name]: target.value
        }));
    }

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        addPost(formValue);
    }

    return <PostCreateForm  formValue={formValue}
                            onChange={handleFormChange} 
                            onSubmit={handleFormSubmit} />;
}

const mapStateToProps = (store: StoreType) => ({
    isPostCreateSuccess: store.popupState.isSuccess
  });

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators({ addPost }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(PostFormContainer);