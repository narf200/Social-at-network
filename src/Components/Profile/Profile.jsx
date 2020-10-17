import React from "react";
import s from './Profile.module.css'
import ProfileWallPaper from '../.././assets/images/ProfileWallPaper.png'
import MyPosts from "./MyPosts/MyPosts";


const Profile = ()=> {
  return (
    <div className={s.ProfileItem}>
        Main Content
        <img
            src={ProfileWallPaper}
            alt="Different breeds of cats"/>
        <div>ava + description</div>
        <MyPosts />
    </div>)
}
export default Profile