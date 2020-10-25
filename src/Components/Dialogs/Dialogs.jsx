import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {messageTextChangeActionCreator, sendMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    console.log(props)
    let dialogsElements = props.dialogsPage.dialogsData.map(d=><Dialog name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m=><Message message={m.messageText} likesCount={m.likesCount}/>)

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let messageTextChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(messageTextChangeActionCreator(text))
    }

    return (
        <div className={s.dialogsItem}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messageBackGround}>

                        {messagesElements}


                </div>
                <div >
                    <div>
                        <textarea ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={messageTextChange}></textarea>
                    </div>
                    <div><button onClick={sendMessage}>send message</button></div>
                </div>
                 </div>
        </div>)
}
export default Dialogs