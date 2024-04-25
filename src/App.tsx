import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import styled from 'styled-components';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/appReducer';
import {AppStateType, store} from './redux/redux-store';
import Preloader from './components/common/preloader/Preloader';
import {GlobalStyle} from './styles/Global.styled';
import {WithSuspense} from './hoc/WithSuspense';
import DialogsContainer from './components/dialogs/DialogsContainer';
import ProfileContainer from './components/profile/ProfileContainer';




type MapDispatchToPropsType = {
    initializeApp: () => void;
};

type MapStateToPropsType = {
    initialized: boolean
}

type AppMapStateAndDispatchType = MapDispatchToPropsType & MapStateToPropsType

const DialogsWithSuspense = WithSuspense(DialogsContainer);
const ProfileWithSuspense = WithSuspense(ProfileContainer);

class App extends React.Component <AppMapStateAndDispatchType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <AppStyled>
                <HeaderContainer/>
                <Navbar/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>

                <Route path="/dialogs" component={DialogsWithSuspense} />
                <Route path="/profile/:userId?" component={ProfileWithSuspense} />

                <Route path="/users" render={() => <UsersContainer/>}/>

                <Route path="/login" render={() => <Login/>}/>
            </AppStyled>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export const SamuraiJSApp = (props: any) => {
    return (
        < BrowserRouter>
            <GlobalStyle/>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )

}


const AppStyled = styled.div`
  display: grid;
  grid-template-areas:
    "h h"
    "n c";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
  height: 100vh;
`