import React, {FC} from 'react';
import userPhoto from '../../assets/images/account.svg';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../redux/usersReducer';

type UserPropsType = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
}

const User: FC<UserPropsType> = (
    {
        user,
        unfollow,
        follow,
        followingInProgress
    }) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img style={{width: '50px', height: '50px'}}
                             src={user.photos.small !== null ? user.photos.small : userPhoto} alt="dawdwad"/>
                    </NavLink>

                       </div>
                <div>{user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>Follow</button>}
                </div>
            </span>

            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>
    )
};

export default User;