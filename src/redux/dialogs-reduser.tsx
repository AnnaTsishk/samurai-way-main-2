import {DialogsPageType, UpdateNewMessageBody} from "./store";
import {AppStateType} from "./redux-store";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'
const initState: DialogsPageType = {
    dialogs: [
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

const dialogsReducer = (state = initState, action: any) => {
       switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages,{id: 6, message: body}]
            }
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMassageBodyCreator = (body: string): UpdateNewMessageBody =>
     ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;