import React from 'react';
import cl from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType, PostsType} from "../redux/state";


type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

const Dialogs = (props:DialogsPropsType) => {
      let dialogsElements = props.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messages
        .map(message => <Message text={message.message} id={message.id}/>)

    return (

        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}> {dialogsElements}
        </div>
            <div className={cl.messages}>
                <div className={cl.messages}>{messagesElements}
            </div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={()=> {}}>Add post</button>
                </div>
            </div>
        </div>)

}

export default Dialogs;