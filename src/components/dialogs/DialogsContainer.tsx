import {addDialogPostActionCreator, DialogsPageType} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import React from 'react';

type MapStateToPropsType = {
    dialogPage: DialogsPageType
}

type MapDispatchToPropsType = {
    addDialogPost: (newDialogText: string) => void
}

export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        dialogPage: state.dialogPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addDialogPost: (newDialogText: string) => {
            dispatch(addDialogPostActionCreator(newDialogText))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
