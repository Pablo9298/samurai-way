import {getAuthUserData} from './authReducer';


const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

const initialState: InitialStateType = {
    initialized: false
}

export type InitialStateType = {
    initialized: boolean
}

type InitializedSuccessType = ReturnType<typeof initializedSuccess>


export const appReducer = (state: InitialStateType = initialState, action: InitializedSuccessType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
}) as const


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}





