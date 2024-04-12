import s from "./Dialogs.module.css"
// import {s} from '../main/Main_Styles'
import styled from "styled-components";
import {DialogItem} from "./DialogItem/Dialog";
import {Message} from "./Message/Message";
import {RootStateType, StateType} from "../../redux/state";
import {createRef} from "react";


export const Dialogs = ({messagesPage}:RootStateType) => {

    const newMessage = createRef<HTMLTextAreaElement>()

    const addMessageHandler = () => {
        let message = newMessage.current?.value
        alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem messagesPage={messagesPage}/>
            </div>
            <div className={s.messages}>
                <Message messagesPage={messagesPage}/>
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