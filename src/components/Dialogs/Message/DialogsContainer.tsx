import React from 'react';
import Dialogs from "../Dialogs";
import {sendMessageCreator, updateNewMassageBodyCreator} from "../../../redux/dialogs-reduser";

import {ActionTypesBoy, ActionTypesType, AppStateType, DialogsPageType} from "../../../redux/store";
import {ReduxStoreType} from "../../../redux/redux-store";


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