import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d=><Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.state.messagesData.map(m=><Message message={m.message}/>)

    return (
        <div className={s.dialogsItem}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
                 </div>
        </div>)
}
export default Dialogs