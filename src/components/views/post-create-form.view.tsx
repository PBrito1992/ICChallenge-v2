import { ChangeEventHandler, FormEventHandler } from "react";

interface PostCreateFormPropsType{
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    onSubmit: FormEventHandler<HTMLFormElement>
}

export const PostCreateForm = ({onChange, onSubmit}: PostCreateFormPropsType) => {

    return (
        <form className='was-validated mt-3' onSubmit={onSubmit}>
            <input  type='text' 
                    name='userName' 
                    placeholder='UserName' 
                    className='form-control mt-3' 
                    required 
                    onChange={onChange} />
            
            <input  type='url' 
                    name='userProfileImgUrl' 
                    placeholder='Image Url' 
                    className='form-control mt-3' 
                    required 
                    onChange={onChange} />
            
            <textarea   name='comment' 
                        placeholder='Comment' 
                        className='form-control mt-3' 
                        required 
                        onChange={onChange}></textarea>
            
            <button type='submit' 
                    className='btn btn-block btn-primary mt-3'
                    >Add Post</button>
        </form>
    );
}