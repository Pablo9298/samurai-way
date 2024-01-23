import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import styled from 'styled-components';
import {Route} from 'react-router-dom';
import {DialogsContainer} from './components/dialogs/DialogsContainer';
import {UsersContainer} from './components/users/UsersContainer';

const App = () => {
    return (
        <AppStyled>
            <Header/>
            <Navbar/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>

            <Route path="/dialogs" render={() => <DialogsContainer />}/>


            <Route path="/profile" render={() => <Profile />}/>

            <Route path="/users" render={() => <UsersContainer />}/>
        </AppStyled>
    );
}

export default App;

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