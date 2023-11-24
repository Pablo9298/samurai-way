import React from 'react';
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../redux/state';
import {ItemImgStyled} from '../../profile/mypost/post/Post';

export const DialogItem = (props: DialogType) => {
    const activeClassName = props.isActive ? 'active' : '';
    let path = '/dialogs/' + props.id
    return (
        <li className={`dialog ${activeClassName}`}>
            <ItemImgStyled
                src="https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg"
                alt="avatar"/>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    )
}
