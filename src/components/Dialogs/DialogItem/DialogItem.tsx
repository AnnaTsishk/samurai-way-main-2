import React from 'react';
import cl from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import user3 from "../../../assets/images/user3.png";

type DialogItemPropsType={
    id: number
    name: string
}

const DialogItem = (props:DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (<div className={cl.dialog + ' ' + cl.active}>
            <img src={user3}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem