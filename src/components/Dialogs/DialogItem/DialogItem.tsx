import React from 'react';
import cl from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {MessagesType} from "../../redux/state";

type DialogItemPropsType={
    id: number
    name: string
}

const DialogItem = (props:DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (<div className={cl.dialog + ' ' + cl.active}>
            <img src='https://kartinkin.net/uploads/posts/2022-03/1646130613_1-kartinkin-net-p-kartinki-o-smisle-zhizni-1.jpg'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem