import React, {ChangeEvent, FC} from 'react';
import {StyledSections} from '../../styles/StyledSections';
import styled from 'styled-components';
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogPropsType} from './DialogsContainer';

export const Dialogs: FC<DialogPropsType> = (props) => {

        let dialogsElements = props.dialogPage.dialogs
            .map((d) =>
                <DialogItem key={d.id} name={d.name} id={d.id} isActive={false}/>);


        let messagesElements = props.dialogPage.messages
            .map(m =>
                <Message key={m.id} message={m.message} id={m.id}/>)

        const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let message = e.currentTarget.value
            props.addDialogPostMessage(message)
        }
        const dialogSendMessageHandler = () => {
            props.addDialogPost()
        }

        return (
            <StyledSections>
                <TitleStyled>Dialogs</TitleStyled>
                <StyledDialogs className="dialogs">

                    <DialogItems className="dialogs-items">
                        {dialogsElements}
                    </DialogItems>

                    <StyledMessages className="messages">
                        {messagesElements}
                        <textarea value={props.dialogPage.newDialogText} onChange={onChangeHandler}></textarea>
                        <button onClick={dialogSendMessageHandler}>Send Message</button>
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
