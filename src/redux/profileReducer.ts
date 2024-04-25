import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';


export type AddPostActionCreator = ReturnType<typeof addPostActionCreator>
type SetUserProfileAC = ReturnType<typeof setUserProfile>
type SetStatus = ReturnType<typeof setStatus>
type DeletePost = ReturnType<typeof deletePost>

export type ProfileActionTypes =
    | AddPostActionCreator
    | SetUserProfileAC
    | SetStatus
    | DeletePost

export type PostType = {
    id: number;
    likesCounts: number;
    message: string;
};

export type ProfileInfoType = {
    aboutMe: string
    contacts: ProfileInfoContactsType,
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number,
    photos: ProfileInfoPhotosType
}

type ProfileInfoContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

type ProfileInfoPhotosType = {
    small: string
    large: string
}

let initialState = {
    posts: [
        {id: 1, likesCounts: 10, message: 'Hey how its going ?'},
        {id: 2, likesCounts: 21, message: 'What are u doing today ?'},
        {id: 3, likesCounts: 13, message: 'It\'s my first post'},
    ] as Array<PostType>,
    profile: null as null | ProfileInfoType,
    status: ''
}

export type ProfilePageType = typeof initialState
const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                likesCounts: 0,
                message: action.newPostText,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'DELETE-POST': {
            return {
                ...state, posts: state.posts.filter((p) => p.id !== action.postId)
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
}

export const setUserProfile = (profile: ProfileInfoType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}

export const deletePost = (postId: number) => {
    return {
        type: 'DELETE-POST',
        postId
    } as const
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const res = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(res.data))
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))

}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer;