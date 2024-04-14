import s from "../Dialogs.module.css"
import {MessagesPageType} from "../../../redux/state";


export const Message = ({messagesPage}: {messagesPage: MessagesPageType}) => {
    return (
        <>
            {messagesPage.messages.map(el => {
                return (
                    <div className={s.message} key={el.id}>{el.name}</div>
                )
            })}
        </>
    )
}