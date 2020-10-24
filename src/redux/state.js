let ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: '1', postText: 'It`s my first post.', likesCount: '12'},
                {id: '2', postText: 'Where is my cat ?', likesCount: '8'},
                {id: '3', postText: 'Thanks for the new toys!', likesCount: '3'},
                {id: '4', postText: 'Where is my box ?', likesCount: '55'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: '1', name: "Sandy"},
                {id: '2', name: "Motya"},
                {id: '3', name: "Fil"},
                {id: '4', name: "Barsik"}
            ],

            messagesData: [
                {id: '1', message: "Give me food"},
                {id: '2', message: "Play whith me"},
                {id: '3', message: "I`m hungry"},
                {id: '4', message: "Pet my fur"}
            ]
        },
        sideBar: {
            friendsList: [
                {
                    id: '1',
                    name: "Sandy",
                    avatar: "https://pbs.twimg.com/profile_images/980078612081795072/g_NUbXIw_400x400.jpg",
                    status: 'online'
                },
                {
                    id: '2',
                    name: "Motya",
                    avatar: "https://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI_400x400.jpg",
                    status: 'online'
                },
                {
                    id: '3',
                    name: "Fil",
                    avatar: "https://pbs.twimg.com/profile_images/506215886500687873/09EWW0Sm_400x400.jpeg",
                    status: 'online'
                },
                {
                    id: '4',
                    name: "Barsik",
                    avatar: "https://pbs.twimg.com/profile_images/1057953961804738560/h6OFjm3E_400x400.jpg",
                    status: 'online'
                }
            ]
        },
    },
    _callSubscriber() {
        console.log('qOqO')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost() {
        let newPost = {
            id: '5',
            postText: this._state.profilePage.newPostText,
            likesCount: '24'
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: '5',
                postText: this._state.profilePage.newPostText,
                likesCount: '24'
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newPostText: text
    }
}

export default store

window.store = store
