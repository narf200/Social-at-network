import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ()=> {
  return (
    <div className={s.postsItem}>
        <div>
            My posts
            <div >
                <div>
                    <textarea ></textarea>
                </div>
                <div><button>add post</button></div>
                <div><button>remove post</button></div>
                </div>
            <div className={s.posts}>
                <Post message="It`s my first post." likeCount={12}/>
                <Post message="Where is my cat ?" likeCount={8}/>
                <Post message="Where is my box ?" likeCount={3}/>
                <Post message="Thanks for the new toys!" likeCount={55}/>
            </div>
        </div>
    </div>)
}
export default MyPosts