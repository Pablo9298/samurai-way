export type AddDialogPostActionCreator = ReturnType<typeof addDialogPostActionCreator>

export type DialogType = {
    id: number;
    name: string;
    isActive?: boolean
};

export type MessageType = {
    id: number;
    message: string;
};


const initialState = {
    dialogs: [
        {id: 1, name: 'Pablo'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Vasja'},
        {id: 4, name: 'Sanja'},
        {id: 5, name: 'Serzh'},
        {id: 6, name: 'Vitek'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'h1'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'is all okay ?'},
        {id: 4, message: 'Yes ofcrs'},
    ] as Array<MessageType>,
}

export type DialogsPageType = typeof initialState

const dialogsReducer = (state: DialogsPageType = initialState, action: AddDialogPostActionCreator): DialogsPageType => {
    switch (action.type) {
        case 'ADD-DIALOG-POST': {
            let dialogText: MessageType = {
                id: new Date().getTime(),
                message: action.newDialogText
            };
            return {
                ...state,
                messages: [...state.messages, dialogText],
            }
        }
        default:
            return state
    }
}

export const addDialogPostActionCreator = (newDialogText: string) => {
    return {
        type: 'ADD-DIALOG-POST',
        newDialogText
    } as const
}

export default dialogsReducer;