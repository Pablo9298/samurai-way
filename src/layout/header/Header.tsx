import React from 'react';
import styled from "styled-components";

export const Header = () => {
    return (
        <HeaderStyled>
            <ImgStyled src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                       alt="Logo"/>
        </HeaderStyled>
    );
};


const HeaderStyled = styled.header`
  grid-area: h;
  border: 1px solid red;
  background-color: #c8dced;
`
const ImgStyled = styled.img`
  width: 40px;
`

