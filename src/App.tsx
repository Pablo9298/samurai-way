import React, {FC} from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Message} from './components/dialogs/message/Message';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import styled from 'styled-components';
import {BrowserRouter, Route} from 'react-router-dom';
import {Dialogs} from './components/dialogs/Dialogs';
import {RootStateType} from './redux/state';


const App: FC<RootStateType> = (props ) => {

    return (
        <BrowserRouter>
            <AppStyled>
                <Header/>
                <Navbar/>
                {/*<Route path='/dialogs' component={Dialogs}/>*/}
                {/*<Route path='/profile' component={Profile}/>*/}
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>

                <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogPage.dialogs} messages={props.dialogPage.messages} />}/>
                <Route path="/profile" render={() => <Profile posts={props.profilePage.posts} />}/>
            </AppStyled>
        </BrowserRouter>
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