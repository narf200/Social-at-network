import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


   let  dialogsData = [
        { id:'1', name:"Sandy"},
        { id:'2', name:"Motya"},
        { id:'3', name:"Fil"},
        { id:'4', name:"Barsik"}
    ]

    let messagesData = [
    {id:'1', message:"Give me food"},
    {id:'2', message:"Play whith me"},
    {id:'3', message:"I`m hungry"},
    {id:'4', message:"Pet my fur"}
]

    let postData = [
    {id:'1', postText:'It`s my first post.', likesCount:'12'},
    {id:'2', postText:'Where is my cat ?', likesCount:'8'},
    {id:'3', postText:'Thanks for the new toys!', likesCount:'3'},
    {id:'4', postText:'Where is my box ?', likesCount:'55'}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
