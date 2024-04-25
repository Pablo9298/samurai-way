import {ProfileActionTypes,} from './profileReducer';


 type StoreType = {
    _state: RootStateType;
    _callSubscriber: (_state: RootStateType) => void;
    getState: () => RootStateType;
    subscribe: (observer: () => void) => void;
    dispatch: (action: ActionsTypes) => void;
}

 type RootStateType = {
    profilePage: ProfilePageType;
    dialogPage: DialogPageType;
};

 type ProfilePageType = {
    posts: PostType[];
    newPostText: string;
};

 type DialogPageType = {
    dialogs: DialogType[];
    messages: MessageType[];
    newDialogText: string
};

 type PostType = {
    id: number;
    likesCounts: number;
    message: string;
};

  type DialogType = {
    isActive?: boolean
    id: number;
    name: string;
};

  type MessageType = {
    id: number;
    message: string;
};

type FindUsersPage = {
    users: Array<Users>
}

type Users = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: UsersLocation
}

type UsersLocation = {
    city: string
    country: string
}

 type ActionsTypes = ProfileActionTypes

 let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likesCounts: 10, message: 'Hey how its going ?'},
                {id: 2, likesCounts: 21, message: 'What are u doing today ?'},
                {id: 3, likesCounts: 13, message: 'It\'s my first post'},
            ],
            newPostText: '',
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
            ],
            newDialogText: '',
        },
        // sidebar: {}
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        // //sidebarReducer(this._state.sidebar, action)
        //
        // this._callSubscriber(this._state)
    }
};

