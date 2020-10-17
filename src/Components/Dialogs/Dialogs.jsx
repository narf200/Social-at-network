import React from "react";
import s from './Dialogs.module.css'


const Dialogs = (props)=> {
  return (
    <div className={s.dialogsItem}>
        <div className={s.dialogs}>
            <div className={s.dialog}>Sandy</div>
            <div className={s.dialog}>Motya</div>
            <div className={s.dialog}>Fil</div>
            <div className={s.dialog}>Barsik</div>
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