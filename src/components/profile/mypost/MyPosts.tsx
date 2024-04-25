import React, {FC, memo} from 'react';
import styled from 'styled-components';
import {Post} from './post/Post';
import {ProfilePropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/formsControls/FormsControls';


export const MyPosts = memo((props: ProfilePropsType) => {

    let postElements = props.profilePage.posts
        .map((p) => <Post key={p.id} message={p.message} likesCounts={p.likesCounts}/>);

    const onAddPost = (values: FormData) => {
        props.addPost(values.newPostText);
    };

    return (
        <>
            <MyPostsAddPostWrapper>
                <h3>my posts</h3>
                <AddNewMessageFormRedux onSubmit={onAddPost}/>
                {postElements}
            </MyPostsAddPostWrapper>
        </>
    );
});

type FormData = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: FC<InjectedFormProps<FormData>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" validate={[required, maxLength10]}
                       placeholder={'Post message'}/>
                <button type="submit">Send Message</button>
            </div>
        </form>
    );
};

const AddNewMessageFormRedux = reduxForm<FormData>({form: 'profileAddNewPostForm'})(AddNewPostForm);

const MyPostsAddPostWrapper = styled.div`
  padding: 20px;

  & button {
    display: block;
    margin: 10px 0 20px 0;
  }
`
