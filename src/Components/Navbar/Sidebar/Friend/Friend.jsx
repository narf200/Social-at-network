import React from "react";
import s from './Friend.module.css'

const Friend = (props)=> {
  return (
      <div className={s.item}>
        <img src={props.avatar} alt="cat"/>
        {props.name}
        {props.status}
  </div>
  )
}
export default Friend