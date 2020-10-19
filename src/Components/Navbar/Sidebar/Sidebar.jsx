import React from 'react';
import s from './Sidebar.module.css';
import Friend from "./Friend/Friend";
const Sidebar = (props)=> {
    console.log(props)
    let friendsList = props.friendsList.map(f=><Friend id={f.id} name={f.name} avatar={f.avatar} status={f.status}/>)

  return (
      <div>
          <p>Online friends</p>
          {friendsList}
      </div>
  );
}


export default Sidebar;
