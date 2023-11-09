import React from 'react';
import styled from "styled-components";

export const Profile = () => {
    return (
        <MainStyled>
            <div>
                <ImageStyled src="https://rare-gallery.com/uploads/posts/802141-Tropics-Coast-Branches-Beach.jpg"
                             alt="beach"/>
            </div>

            <div>
                avatar + descr
            </div>

            <div>
                my posts
                <div>new post</div>
            </div>

            <ItemStyled>post1</ItemStyled>
            <ItemStyled>post2</ItemStyled>
        </MainStyled>
    );
}

const MainStyled = styled.main`
  grid-area: c;
  border: 1px solid red;
  width: 100%;
  background-color: #c8dced;
`

const ImageStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`

const ItemStyled = styled.div`

`
