let rerenderEntireTree = () => {
    console.log('qOqO')
}

let state = {
    profilePage: {
         postData: [
            {id:'1', postText:'It`s my first post.', likesCount:'12'},
            {id:'2', postText:'Where is my cat ?', likesCount:'8'},
            {id:'3', postText:'Thanks for the new toys!', likesCount:'3'},
            {id:'4', postText:'Where is my box ?', likesCount:'55'}
        ],
        newPostText: ''
    },
    dialogsPage: {
         dialogsData: [
            { id:'1', name:"Sandy"},
            { id:'2', name:"Motya"},
            { id:'3', name:"Fil"},
            { id:'4', name:"Barsik"}
        ],

         messagesData: [
            {id:'1', message:"Give me food"},
            {id:'2', message:"Play whith me"},
            {id:'3', message:"I`m hungry"},
            {id:'4', message:"Pet my fur"}
        ]
    },
    sideBar: {
        friendsList: [
            { id:'1', name:"Sandy", avatar:"https://pbs.twimg.com/profile_images/980078612081795072/g_NUbXIw_400x400.jpg", status:'online'},
            { id:'2', name:"Motya", avatar:"https://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI_400x400.jpg", status:'online'},
            { id:'3', name:"Fil", avatar:"https://pbs.twimg.com/profile_images/506215886500687873/09EWW0Sm_400x400.jpeg", status:'online'},
            { id:'4', name:"Barsik", avatar:"https://pbs.twimg.com/profile_images/1057953961804738560/h6OFjm3E_400x400.jpg", status:'online'}
        ]
    },
}

export let addPost = () => {
    let newPost = {
        id:'5',
        postText: state.profilePage.newPostText,
        likesCount:'24'
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state


