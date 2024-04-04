import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

type DialogProps = {
    name: string
    page?:number
    id:number
}

export const DialogItem = ({ name, page, id }: DialogProps) => {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={'/dialogs/' + id }>{name}</NavLink>
        </div>
    )
}