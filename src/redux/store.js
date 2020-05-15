import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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

            newMessageBody: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};


export default store;
window.store = store;