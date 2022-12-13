import React from 'react';
import cl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={cl.nav}>
        <div className={`${cl.item} ${cl.active}`}>
          <NavLink to="/profile" activeClassName={cl.active}>Profile</NavLink>
        </div>

        <div className={`${cl.item} ${cl.active}`}>
          <NavLink to="/dialogs" activeClassName={cl.active}>Massages</NavLink>
        </div>
        <div className={`${cl.item} ${cl.active}`}>
          <NavLink to="/users" activeClassName={cl.active}>Users</NavLink>
        </div>

        <div className={`${cl.item} ${cl.active}`}>
          <NavLink to="/news" activeClassName={cl.active}>News</NavLink>
        </div>

        <div className={`${cl.item} ${cl.active}`}>
          <NavLink to="/music" activeClassName={cl.active}>Music</NavLink>
        </div>

        <div className={`${cl.item} ${cl.active}`}>
          <NavLink to="/settings" activeClassName={cl.active}>Settings</NavLink>
        </div>

        <div className={`${cl.item} ${cl.active}`}>
          <NavLink to="/friends" activeClassName={cl.active}>Friends
            <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwma3xNpOilSr-PyKOH7GNWFy1q6yAcmW-VHFReTnZR3zvY0EXRAnp_iByuyV3ljQQnWA&usqp=CAU"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwma3xNpOilSr-PyKOH7GNWFy1q6yAcmW-VHFReTnZR3zvY0EXRAnp_iByuyV3ljQQnWA&usqp=CAU"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwma3xNpOilSr-PyKOH7GNWFy1q6yAcmW-VHFReTnZR3zvY0EXRAnp_iByuyV3ljQQnWA&usqp=CAU"/>
            </div>
          </NavLink>
        </div>

  </nav>);

}
export default Navbar;