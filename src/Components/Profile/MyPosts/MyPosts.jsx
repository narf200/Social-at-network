import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ()=> {
  return (
    <div className={s.content}>
        <div>
            My posts
            <div>
                New posts
                <textarea ></textarea>
                <button>add post</button>
                <button>remove post</button>
            </div>
            <div className={s.posts}>
                <Post message="It`s my first post" likeCount={12}/>
                <Post message="where is my cat ?" likeCount={8}/>
                <Post />
                <Post />
            </div>
        </div>
    </div>)
}
export default MyPosts