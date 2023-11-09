import React from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import {Navbar} from './layout/navbar/Navbar';
import {Profile} from './layout/profile/Profile';
import styled from "styled-components";

const App = () => {
    return (
        <AppStyled>
            <Header/>
            <Navbar/>
            <Profile/>
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