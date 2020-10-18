import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props)=> {
  return (
    <div className={s.dialogsItem}>
        <div className={s.dialogs}>
            <div className={s.dialog}>
               <NavLink to='dialogs/1'>Sandy</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='dialogs/2'>Motya</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='dialogs/3'>Fil</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='dialogs/4'>Barsik</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Give me food</div>
            <div className={s.message}>Play whith me</div>
            <div className={s.message}>I`m hungry</div>
            <div className={s.message}>Pet my fur</div>
        </div>
    </div>)
}
export default Dialogs