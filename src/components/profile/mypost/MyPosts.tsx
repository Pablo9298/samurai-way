import React, {ChangeEvent, FC} from 'react';
import styled from 'styled-components';
import {Post} from './post/Post';
import {ProfilePropsType} from './MyPostsContainer';


export const MyPosts: FC<ProfilePropsType> = (props) => {

    let postElements = props.profilePage.posts
        .map((p) => <Post key={p.id} message={p.message} likesCounts={p.likesCounts}/>);
    const addPostHandler = () => {
        props.addPost();
    };

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNePostText(text)
    };

    return (
        <>
            <MyPostsAddPostWrapper>
                <h3>my posts</h3>

                <textarea value={props.profilePage.newPostText} onChange={onPostChange}/>
                <button onClick={addPostHandler}>Add post</button>

                {postElements}
            </MyPostsAddPostWrapper>
        </>
    );
};

const MyPostsAddPostWrapper = styled.div`
  padding: 20px;

  & button {
    display: block;
    margin: 10px 0 20px 0;
  }
`
