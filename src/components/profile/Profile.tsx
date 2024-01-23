import React from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {StyledSections} from '../../styles/StyledSections';
import {MyPostsContainer} from './mypost/MyPostsContainer';

export const Profile = () => {

    return (
        <StyledSections>
            <ProfileInfo/>
            <MyPostsContainer />
        </StyledSections>
    );
};
