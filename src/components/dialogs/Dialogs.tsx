import React from 'react';
import {StyledSections} from '../../styles/StyledSections';
import styled from 'styled-components';
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogPageType} from '../../redux/state';

export const Dialogs = (props: DialogPageType) => {

        let dialogsElements = props.dialogs
            .map((d) =>
                <DialogItem name={d.name} id={d.id} isActive={false}/>);


        let messagesElements = props.messages
            .map(m =>
                <Message message={m.message} id={m.id}/>)

        return (
            <StyledSections>
                <TitleStyled>Dialogs</TitleStyled>
                <StyledDialogs className="dialogs">

                    <DialogItems className="dialogs-items">
                        {dialogsElements}
                    </DialogItems>

                    <StyledMessages className="messages">
                        {messagesElements}
                    </StyledMessages>
                </StyledDialogs>
            </StyledSections>
        );
    }
;

const TitleStyled = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const StyledDialogs = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr;
  padding: 25px;
`

const DialogItems = styled.ul`

  li {
    display: flex;
    align-items: center;
    gap: 20px;

    & + li {
      margin-top: 50px;
    }

    &.active {
      color: red
    }
  }
`

const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
