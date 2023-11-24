import React from 'react';
import {MessageType} from '../../../redux/state';
import styled from 'styled-components';

export const Message = (props: MessageType) => {
    return (
        <Test className="message">{props.message}</Test>
    )
}

const Test = styled.p`
  display: flex;
  flex-direction: column;
  
  &:nth-child(odd) {
    align-items: end;
  }
  
`

