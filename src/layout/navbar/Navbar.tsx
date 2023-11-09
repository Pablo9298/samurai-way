import React from 'react';
import styled from "styled-components";

export const Navbar = () => {
    return (
        <NavStyled>
            <ItemsListStyled>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
            </ItemsListStyled>
        </NavStyled>
    );
};


const NavStyled = styled.nav`
  grid-area: n;
  border: 1px solid red;
  background-color: #c8dced;
`

const ItemsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  font-size: 23px;
`