import React from 'react';
import {MyPosts} from './mypost/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {StyledSections} from '../../styles/StyledSections';
import {ProfilePageType} from '../../redux/state';

export const Profile = (props: ProfilePageType) => {
    return (
        <StyledSections>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </StyledSections>
    );
}


