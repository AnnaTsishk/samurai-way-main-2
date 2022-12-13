import React, {ChangeEvent} from 'react';
import Dialogs from "../Dialogs";
import {ReduxStoreType} from "../../../redux/redux-store";
import {sendMessageCreator, updateNewMassageBodyCreator} from "../../../redux/dialogs-reduser";
import StoreContext from "../../../StoreContext"



const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store: ReduxStoreType) => {
            let state = store.getState().dialogsPage;
            let onSendMessageClick = (newMessageBody: string) => {
                store.dispatch(sendMessageCreator(newMessageBody))
            }
            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMassageBodyCreator(body))
            }
            return <Dialogs
                updateNewMassageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                store={store}
                dialogsPage={store.getState().dialogsPage}/>
        }}
    </StoreContext.Consumer>
}

export default DialogsContainer;