const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

    newMessageBody: ""
};

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;

            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 5, message: body}]
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;