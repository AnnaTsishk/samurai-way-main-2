import React, {ChangeEvent} from 'react';
import cl from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMassageBodyCreator} from "../../redux/dialogs-reduser";
import {ReduxStoreType} from "../../redux/redux-store";


type DialogsPropsType = {
    store: ReduxStoreType
 }

const Dialogs = (props:DialogsPropsType) => {
  let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages
        .map(message => <Message text={message.message} id={message.id}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick =()=> {
        props.store.dispatch(sendMessageCreator(newMessageBody))
    }
        let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.store.dispatch(updateNewMassageBodyCreator(body))
    }
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}> {dialogsElements}
            </div>
            <div className={cl.messages}>
                   <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick= {onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>)
}

export default Dialogs;