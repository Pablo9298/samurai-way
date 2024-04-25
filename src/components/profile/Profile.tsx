import React from 'react';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { StyledSections } from '../../styles/StyledSections';
import { MyPostsContainer } from './mypost/MyPostsContainer';
import {ProfileInfoType} from '../../redux/profileReducer';
interface ProfileProps {
    profile: ProfileInfoType
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfileProps> = ({ profile, status, updateStatus }) => {
    return (
        <StyledSections>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}/>
            <MyPostsContainer />
        </StyledSections>
    );
};
