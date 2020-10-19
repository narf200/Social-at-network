import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props)=> {

    let postsElements = props.postData.map(p=><Post message={p.postText} likeCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }


  return (
    <div className={s.postsItem}>
        <div>
            <h3> My posts</h3>
            <div >
                <div>
                    <textarea ref={newPostElement} ></textarea>
                </div>
                <div><button onClick={addPost}>add post</button></div>
                <div><button>remove post</button></div>
                </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>)
}
export default MyPosts