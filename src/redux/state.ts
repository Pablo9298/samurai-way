export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
    isActive?: boolean
}

export type PostType = {
    id: number
    likesCounts: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}


export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, likesCounts: 10, message: 'Hey how its going ?'},
            {id: 1, likesCounts: 21, message: 'What are u doing today ?'},
            {id: 1, likesCounts: 13, message: 'It\'s my first post'},
        ]
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Pablo'},
            {id: 2, name: 'Viktor'},
            {id: 3, name: 'Vasja'},
            {id: 4, name: 'Sanja'},
            {id: 5, name: 'Serzh'},
            {id: 6, name: 'Vitek'},
        ],
        messages: [
            {id: 1, message: 'h1'},
            {id: 2, message: 'how are you?'},
            {id: 3, message: 'is all okay ?'},
            {id: 4, message: 'Yes ofcrs'},
        ]
    },
    // sidebar: {}
}