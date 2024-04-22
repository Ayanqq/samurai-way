import s  from "../dialogs/Dialogs.module.css"

type MessageType = {
    text:string
}
export const Message = ({text}:MessageType) => {
    return (
        <div className={s.message}>{text}</div>
    )
}