import React from "react";
import s from './ProfileInfo.module.css'
import ProfileWallPaper from "../../../assets/images/ProfileWallPaper.png";


const ProfileInfo = () => {
    return (
        <div>
            <img
                src={ProfileWallPaper}
                alt="Different breeds of cats"/>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo