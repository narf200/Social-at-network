import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = ()=> {
  return (
    <div className={s.content}>
        Main Content
        <img
            src="https://images.techhive.com/images/article/2015/12/nekoatsume2-100633045-large.jpg"
            alt="neko cat"/>
        <div>ava + description</div>
        <MyPosts />
    </div>)
}
export default Profile