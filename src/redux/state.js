const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


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
                {id: '1', messageText: "Give me food"},
                {id: '2', messageText: "Play whith me"},
                {id: '3', messageText: "I`m hungry"},
                {id: '4', messageText: "Pet my fur"}
            ],
            newMessageText: ''
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



    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: '5',
                postText: this._state.profilePage.newPostText,
                likesCount: '24'
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        }
        if (action.type === 'SEND_MESSAGE') {
            let newMessage = {
                id: '5',
                messageText: this._state.dialogsPage.newMessageText,
                likesCount: '24'
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
        if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText
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

    export const sendMessageActionCreator = () => {
        return {
            type: SEND_MESSAGE
        }
    }

    export const messageTextChangeActionCreator = (text) => {
        return {
            type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text
        }
    }

    export default store

    window.store = store
