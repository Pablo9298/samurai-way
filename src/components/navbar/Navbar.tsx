import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <NavStyled>
            <ItemsListStyled>
                <ItemStyled>
                    <NavLink to="/profile">Profile</NavLink>
                </ItemStyled>

                <ItemStyled>
                    <NavLink to="/dialogs">Messages</NavLink>
                </ItemStyled>

                <ItemStyled>
                    <NavLink to="/news">News</NavLink>
                </ItemStyled>

                <ItemStyled>
                    <NavLink to="/music">Music</NavLink>
                </ItemStyled>

                <ItemStyled>
                    <NavLink to="/settings">Settings</NavLink>
                </ItemStyled>
            </ItemsListStyled>
        </NavStyled>
    );
};


const NavStyled = styled.nav`
  grid-area: n;
  border: 1px solid red;
  background-color: #c8dced;
  padding: 20px;
`

const ItemsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
`
const ItemStyled = styled.li`

  a {
    transition: color 0.5s ease;
  }
  
  a.active {
    color: red;
  }
`
