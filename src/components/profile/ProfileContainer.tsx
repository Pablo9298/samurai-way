import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileInfoType, updateStatus} from '../../redux/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

type ProfileContainerType = {
    profile: ProfileInfoType
}

class ProfileContainer extends React.Component<any, ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
