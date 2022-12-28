import React from 'react';
import cl from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props:any)=> {
    return <header className ={cl.header}>
        <img src='https://w7.pngwing.com/pngs/554/595/png-transparent-armenia-donation-ansvar-service-social-responsibility-social-miscellaneous-text-trademark.png'/>
        <div className={cl.loginBlock}>
            {props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header