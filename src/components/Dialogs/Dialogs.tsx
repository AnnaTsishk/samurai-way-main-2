import React, {ChangeEvent} from 'react';
import cl from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
<<<<<<< HEAD
=======
import {sendMessageCreator, updateNewMassageBodyCreator} from "../../redux/dialogs-reduser";
import {ReduxStoreType} from "../../redux/redux-store";
>>>>>>> origin/main
import {DialogsPageType} from "../../redux/store";


export type DialogsPropsType = {
<<<<<<< HEAD
    updateNewMassageBody:(body:string) => void
    dialogsPage: DialogsPageType
    sendMessage:()=>void
=======
    store: ReduxStoreType
    updateNewMassageBody:(body:string) => void
    dialogsPage: DialogsPageType
    sendMessage:(newMessageBody: string)=>void
>>>>>>> origin/main
 }

const Dialogs = (props:DialogsPropsType) => {
  let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElements = state.messages
        .map(message => <Message text={message.message} key={message.id} id={message.id}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick =()=> {
<<<<<<< HEAD
        props.sendMessage();
=======
        props.sendMessage(newMessageBody);
>>>>>>> origin/main

    }
        let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
            props.updateNewMassageBody(body)
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