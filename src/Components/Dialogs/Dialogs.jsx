import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    console.log(props)
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    const dialogData = [
        { id:'1', name:"Sandy"},
        { id:'2', name:"Motya"},
        { id:'3', name:"Fil"},
        { id:'4', name:"Barsik"}
    ]

    const messagesData = [
        {id:'1', message:"Give me food"},
        {id:'2', message:"Play whith me"},
        {id:'3', message:"I`m hungry"},
        {id:'4', message:"Pet my fur"}
    ]

    return (
        <div className={s.dialogsItem}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    <Dialog name={dialogData[0].name} id={dialogData[0].id}/>
                    <Dialog name={dialogData[1].name} id={dialogData[1].id}/>
                    <Dialog name={dialogData[2].name} id={dialogData[2].id}/>
                    <Dialog name={dialogData[3].name} id={dialogData[3].id}/>
                </div>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>)
}
export default Dialogs