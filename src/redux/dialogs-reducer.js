const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Azaliia"},
        {id: 2, name: "Arslan"}
    ],

    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hey"},
        {id: 3, message: "Hello"},
        {id: 4, message: "How are you"}
    ]
};

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;

            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}]
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;