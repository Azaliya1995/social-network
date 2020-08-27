import {ProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 3},
        {id: 2, message: "My first post", likesCount: 5}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfileActionCreator = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setStatusActionCreator = (status) => ({type: SET_STATUS, status: status});

export const getUserProfileThunkCreator = (userId) => (dispatch) => { //thunk
    ProfileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileActionCreator(response.data));
    });
};

export const getStatusThunkCreator = (userId) => (dispatch) => { //thunk
    ProfileAPI.getStatus(userId).then(response => {
        dispatch(setStatusActionCreator(response.data));
    });
};

export const updateStatusThunkCreator = (status) => (dispatch) => { //thunk
    ProfileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusActionCreator(status));
        }
    });
};


export default profileReducer;