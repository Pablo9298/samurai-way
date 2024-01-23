import React from 'react';
import {MessageType} from '../../../redux/store';
import styled from 'styled-components';

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

