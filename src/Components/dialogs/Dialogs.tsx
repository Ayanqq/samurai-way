import s from "./Dialogs.module.css"
// import {s} from '../main/Main_Styles'
import styled from "styled-components";
import {DialogItem} from "./DialogItem/Dialog";
import {Message} from "./Message/Message";
import {createRef} from "react";
import {MessagesPageTypes} from "../../redux/state";

type DialogPropsType = {
    messagesPage: MessagesPageTypes
}

export const Dialogs = ({messagesPage}:DialogPropsType) => {

    const newMessage = createRef<HTMLTextAreaElement>()

    const addMessageHandler = () => {
        let message = newMessage.current?.value
        alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogData={messagesPage.dialogs}/>
            </div>
            <div className={s.messages}>
                <Message messageData={messagesPage.messages}/>
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessageHandler}>Send!!!</button>
            </div>
        </div>
    );
};

const StyledDialogs = styled.div`

`