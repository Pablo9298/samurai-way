import React from 'react';
import {Post} from './post/Post';
import styled from 'styled-components';
import {ProfilePageType} from '../../../redux/state';


export const MyPosts = (props: ProfilePageType) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts}/>)

    return (
        <>
            <MyPostsAddPostWrapper>
               <h3>my posts</h3>

                <textarea></textarea>
                <button style={{display: 'block', marginBottom: '20px'}}>Add post</button>

                {postElements}
            </MyPostsAddPostWrapper>
        </>
    );
};

const MyPostsAddPostWrapper = styled.div`
  padding: 20px;
`



