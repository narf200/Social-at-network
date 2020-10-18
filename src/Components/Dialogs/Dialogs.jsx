import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
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

    const dialogsData = [
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

    let dialogsElements = dialogsData.map(d=><Dialog name={d.name} id={d.id}/>)
    let messagesElements = messagesData.map(m=><Message message={m.message}/>)

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