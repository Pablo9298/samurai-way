import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';

export const Header: React.FC<HeaderContainerPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img className={s.headerImg}
                 src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                 alt="Logo"/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ?<div> {props.login} - <button onClick={props.logout}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

