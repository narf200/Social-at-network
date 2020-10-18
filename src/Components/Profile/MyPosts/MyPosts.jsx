import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ()=> {

    const postData = [
        {id:'1', postText:'It`s my first post.', likesCount:'12'},
        {id:'2', postText:'Where is my cat ?', likesCount:'8'},
        {id:'3', postText:'Thanks for the new toys!', likesCount:'3'},
        {id:'4', postText:'Where is my box ?', likesCount:'55'}
    ]

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