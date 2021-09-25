import { FormEvent, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { PostCreateForm } from "../views/post-create-form.view";
import { addPost } from '../../store/actions/post-add.action';
import { PostCreate } from "../../models/post-create.model";

export const PostCreateContainer = (props: PropsFromRedux) => {

    const [formValue, setFormValue] = useState<PostCreate>({});
    const { addPost } = props;

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

    return <PostCreateForm  onChange={handleFormChange} 
                            onSubmit={handleFormSubmit} />;
}

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators({ addPost }, dispatch);

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(PostCreateContainer);