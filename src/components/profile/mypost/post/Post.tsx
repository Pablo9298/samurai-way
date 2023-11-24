import React, {FC} from 'react';
import styled from "styled-components";


type PostPropsType = {
    message: string
    likesCounts: number
}

export const Post: FC<PostPropsType> = (props) => {
    return (
        <ItemStyled>
            <ItemImgStyled
                src="https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg"
                alt="avatar"/>
            {props.message}
            <span>Post likes {props.likesCounts}</span>
        </ItemStyled>
    );
};

const ItemStyled = styled.div`
  span {
    display: block;
  }
`

export const ItemImgStyled = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
