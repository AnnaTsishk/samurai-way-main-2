import {ActionTypes, DialogsPageType, SendMessageBody, UpdateNewMessageBody} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'
const initState: DialogsPageType = { dialogs: [
        {id: 1, name: 'Anna'},
        {id: 2, name: 'Slava'},
        {id: 3, name: 'Dasha'},
        {id: 4, name: 'Semion'},
        {id: 5, name: 'Alisa'},
        {id: 6, name: 'Roman'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initState, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody: string): SendMessageBody => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody: newMessageBody
    } as const
}

export const updateNewMassageBodyCreator = (text: string): UpdateNewMessageBody => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: text
    } as const
}
export default dialogsReducer;