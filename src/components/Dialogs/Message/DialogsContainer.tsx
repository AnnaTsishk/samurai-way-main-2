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

export default DialogsContainer;