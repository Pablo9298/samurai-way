import React, {FC} from 'react';
import {UserType} from '../../redux/usersReducer';
import { Paginator } from '../common/paginator/Paginator';
import User from './User';

type UsersType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
}

const Users: FC<UsersType> = (
    {
        users,
        totalUsersCount ,
        pageSize,
        currentPage,
        onPageChanged,
        unfollow,
        follow,
        followingInProgress,
    }) => {

    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount }
                       pageSize={pageSize}
            />
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     follow={follow}
                                     unfollow={unfollow}
                                     followingInProgress={followingInProgress}
                />)
            }
        </div>
    );
};

export default Users;