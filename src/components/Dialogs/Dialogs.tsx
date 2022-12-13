import React, {ChangeEvent} from 'react';
import cl from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";


export type DialogsPropsType = {
    updateNewMassageBody:(body:string) => void
    dialogsPage: DialogsPageType
    sendMessage:()=>void
 }

const Dialogs = (props:DialogsPropsType) => {
  let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElements = state.messages
        .map(message => <Message text={message.message} key={message.id} id={message.id}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick =()=> {
        props.sendMessage();

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