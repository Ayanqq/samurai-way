import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.css';
import {DialogType} from "../../../redux/state";

type DialogTypeProps = {
    dialogData:DialogType[]
}
export const DialogItem = ({dialogData}: DialogTypeProps) => {
    return (
        <>
            {dialogData.map((el) => {
                return (
                    <div className={`${s.dialog} ${s.active}`} key={el.id}>
                        <NavLink to={'/dialogs/' + el.id}>{el.name}</NavLink>
                    </div>
                );
            })}
        </>
    );
};