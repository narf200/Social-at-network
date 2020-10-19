import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    console.log(props)
    let dialogsElements = props.dialogsPage.dialogsData.map(d=><Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m=><Message message={m.message}/>)

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div className={s.dialogsItem}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div >
                    <div>
                        <textarea ref={newMessageElement} ></textarea>
                    </div>
                    <div><button onClick={sendMessage}>send message</button></div>
                </div>
                 </div>
        </div>)
}
export default Dialogs