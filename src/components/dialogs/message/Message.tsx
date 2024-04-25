import React from 'react';
import styled from 'styled-components';
import {MessageType} from '../../../redux/dialogsReducer';

export const Message = (props: MessageType) => {

    return (
        <StyledMessages className="message">{props.message}</StyledMessages>
    )
}

const StyledMessages = styled.p`
  display: flex;
  flex-direction: column;
  align-items: end;
`

