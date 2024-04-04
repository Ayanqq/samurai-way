import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
// import {s} from '../main/Main_Styles'
import styled from "styled-components";
import { DialogItem } from "./Dialog";
import { Message } from "./Message";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Ayan" id={1} />
                <DialogItem name="Sasha" id={2} />
                <DialogItem name="Valera" id={3} />
                <DialogItem name="Misha" id={4} />

            </div>
            <div className={s.messages}>
                <Message text="Hello"/>
                <Message text="How ar]eqw you?"/>
                <Message text="You are welcome"/>
            </div>
        </div>
    );
};

const StyledDialogs = styled.div`

`