
export type UpdateNewPostTextActionCreator = ReturnType<typeof updateNewPostTextActionCreator>
export type AddPostActionCreator = ReturnType<typeof addPostActionCreator>

export type ProfileActionTypes = UpdateNewPostTextActionCreator | AddPostActionCreator

export type PostType = {
    id: number;
    likesCounts: number;
    message: string;
};

let initialState = {
    posts: [
        {id: 1, likesCounts: 10, message: 'Hey how its going ?'},
        {id: 2, likesCounts: 21, message: 'What are u doing today ?'},
        {id: 3, likesCounts: 13, message: 'It\'s my first post'},
    ] as Array<PostType>,
    newPostText: '',
}

export type ProfilePageType = typeof initialState
const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: new Date().getTime(),
                likesCounts: 0,
                message: state.newPostText,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: text
    } as const
}

export default profileReducer;