import s from "../Dialogs.module.css"
import {MessageType} from "../../../redux/state";

type MessagePropsType = {
    messageData:MessageType[]
}

export const Message = ({messageData}:MessagePropsType) => {
    return (
        <>
            {messageData.map(el => {
                return (
                    <div className={s.message} key={el.id}>{el.name}</div>
                )
            })}
        </>
    )
}