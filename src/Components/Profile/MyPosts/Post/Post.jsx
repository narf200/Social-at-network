import React from "react";
import s from './Post.module.css'

const Post = ()=> {
  return (
      <div className={s.item}>
          <img src="https://pbs.twimg.com/profile_images/1278008340577206274/nF3h-Jf3_400x400.jpg" alt="cat"/>
          post 1
          <div>
              <span>like</span>
          </div>
  </div>
  )
}
export default Post