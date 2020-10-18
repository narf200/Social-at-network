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
    return (
        <div className={s.dialogsItem}>
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    <Dialog name="Sandy" id='1'/>
                    <Dialog name="Motya" id='2'/>
                    <Dialog name="Fil" id='3'/>
                    <Dialog name="Barsik" id='4'/>
                </div>
            </div>
            <div className={s.messages}>
                <Message message="Give me food"/>
                <Message message="Play whith me"/>
                <Message message="I`m hungry"/>
                <Message message="Pet my fur"/>
            </div>
        </div>)
}
export default Dialogs