import React from "react";
import s from './Friend.module.css'

const Friend = (props)=> {
  return (
      <div className={s.FriendItem}>
        <img src={props.avatar} alt="cat"/>
        <div className={s.name}>
            {props.name}
        </div>
        <div className={s.status}>
            {props.status}
        </div>

  </div>
  )
}
export default Friend