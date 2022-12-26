<<<<<<< HEAD
import React from 'react';
import Dialogs from "../Dialogs";
import {sendMessageCreator, updateNewMassageBodyCreator} from "../../../redux/dialogs-reduser";
import {connect} from "react-redux";
import {ActionTypesBoy, ActionTypesType, DialogsPageType} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType

}
type MapDispatchToPropsType = {
    updateNewMassageBody: (body: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType=> {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:(action: ActionTypesType|ActionTypesBoy)=>void):MapDispatchToPropsType => {
    return {
        updateNewMassageBody:(body: string)=>{
            dispatch(updateNewMassageBodyCreator(body));
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
=======
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
>>>>>>> origin/main

export default DialogsContainer;