import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.css';
import {MessagesPageType, RootStateType} from "../../../redux/state";

type DialogType = {
    messagesPage:MessagesPageType
}
export const DialogItem = ({messagesPage }: DialogType) => {
    return (
        <>
            {messagesPage.dialogs.map((el) => {
                return (
                    <div className={`${s.dialog} ${s.active}`} key={el.id}>
                        <NavLink to={'/dialogs/' + el.id}>{el.name}</NavLink>
                    </div>
                );
            })}
        </>
    );
};