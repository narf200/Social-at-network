import React from "react";
import s from './Message.module.css'

const Message = (props) => {
    return(
        <div className={s.messageItems}>
            <div className={s.messageText}>{props.message}</div>
            </div>
    )
}

export default Message

// добавить максимальную ширину для мобильных устройств
