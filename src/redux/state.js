const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
     _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 3},
                {id: 2, message: "My first post", likesCount: 5}
            ],

            newPostText: 'change me'
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Uzali"},
                {id: 2, name: "Urslanchick"}
            ],

            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Huy"},
                {id: 3, message: "Hello"},
                {id: 4, message: "Who are you"}
            ],

            newMessageText: 'write me'
        },

        sidebar: {
            friends: [
                {id: 1, friendName: "Uzali"},
                {id: 2, friendName: "Urslany"},
                {id: 3, friendName: 'Add'}
            ]
        }
    },

    _callSubscriber() {
        console.log("state is changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type == ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ('');
            this._callSubscriber(this._state);

        } else if (action.type == UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type == 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = ('');
            this._callSubscriber(this._state);

        } else if (action.type == 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        } else if (action.type == UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type == SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default store;
window.store = store;