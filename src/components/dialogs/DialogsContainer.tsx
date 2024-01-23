import {addDialogPostActionCreator, addDialogPostTextActionCreator, DialogsPageType} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';

type MapStateToPropsType = {
    dialogPage: DialogsPageType
}

type MapDispatchToPropsType = {
    addDialogPostMessage: (message: string) => void
    addDialogPost: () => void
}

export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addDialogPostMessage: (message: string) => {
            dispatch(addDialogPostTextActionCreator(message))
        },
        addDialogPost: () => {
            dispatch(addDialogPostActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
