import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from './styles/Global.styled';
import {state} from './redux/state';


ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App dialogPage={state.dialogPage} profilePage={state.profilePage}/>
    </React.StrictMode>,
    document.getElementById('root')
);