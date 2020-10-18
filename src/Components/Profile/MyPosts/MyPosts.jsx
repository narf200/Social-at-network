import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props)=> {

    let postData = props.postData

    let postsElements = postData.map(p=><Post message={p.postText} likeCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    </div>)
}
export default MyPosts