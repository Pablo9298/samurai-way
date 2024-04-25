import React from 'react';
import styled from 'styled-components';
import Preloader from '../../common/preloader/Preloader';
import {ProfileInfoType} from '../../../redux/profileReducer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

type ProfileType = {
    profile: ProfileInfoType
    status: string
    updateStatus: (status: string) => void
}
export const ProfileInfo: React.FC<ProfileType> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <ImageStyled src="https://rare-gallery.com/uploads/posts/802141-Tropics-Coast-Branches-Beach.jpg"
                             alt="beach"/>
            </div>

            <DescriptionBlock>
                <img src={profile.photos.large} alt={'avatar of profile'} style={{maxWidth: '400px'}}/>
                <div>
                    <div>{profile.aboutMe}</div>
                    <div>{profile.contacts.facebook}</div>
                    <div>{profile.contacts.github}</div>
                    <div>{profile.contacts.vk}</div>
                    <div>{profile.contacts.twitter}</div>
                    <div>{profile.contacts.instagram}</div>
                    <div>{profile.contacts.mainLink}</div>
                    <div>{profile.contacts.website}</div>
                    <div>{profile.contacts.youtube}</div>
                    <div>{profile.lookingForAJob}</div>
                    <div>{profile.lookingForAJobDescription}</div>
                    <div>{profile.fullName}</div>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </DescriptionBlock>
        </div>
    );
};

const ImageStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`

const DescriptionBlock = styled.div`
  padding: 20px;
`

