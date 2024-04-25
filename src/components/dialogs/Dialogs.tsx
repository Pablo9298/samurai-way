import React, {FC} from 'react';
import {StyledSections} from '../../styles/StyledSections';
import styled from 'styled-components';
import {DialogItem} from './dialogItem/DialogItem';
import {Message} from './message/Message';
import {DialogPropsType} from './DialogsContainer';
import {Field, reduxForm, InjectedFormProps} from 'redux-form';
import {Textarea} from '../common/formsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';

export const Dialogs: FC<DialogPropsType> = (props) => {

    let dialogsElements = props.dialogPage.dialogs
        .map((d) =>
            <DialogItem key={d.id} name={d.name} id={d.id} isActive={false}/>);

    let messagesElements = props.dialogPage.messages
        .map(m =>
            <Message key={m.id} message={m.message} id={m.id}/>);

    const onSubmit = (values: FormData) => {
        props.addDialogPost(values.newDialogText);
    };

    return (
        <StyledSections>
            <TitleStyled>Dialogs</TitleStyled>
            <StyledDialogs className="dialogs">
                <DialogItems className="dialogs-items">
                    {dialogsElements}
                </DialogItems>
                <StyledMessages className="messages">
                    {messagesElements}
                    <AddMessageFormRedux onSubmit={onSubmit}/>
                </StyledMessages>
            </StyledDialogs>
        </StyledSections>
    );
};

type FormData = {
    newDialogText: string;
};

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: FC<InjectedFormProps<FormData>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name="newDialogText"
                       placeholder="Enter your message"
                />
                <button type="submit" >Send Message</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm<FormData>({form: 'dialogAddMessageForm'})(AddMessageForm);

const TitleStyled = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const StyledDialogs = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr;
  padding: 25px;
`;

const DialogItems = styled.ul`
  li {
    display: flex;
    align-items: center;
    gap: 20px;

    & + li {
      margin-top: 50px;
    }

    &.active {
      color: red;
    }
  }
`;

const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
