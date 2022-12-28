import React from 'react';
import cl from "./Users.module.css";
import {UserType} from "../../redux/store";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


let Users =(props:any)=> {

        let pagesCount:number = Math.ceil(props.totalUsersCount/props.pageSize);
        let pages=[];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }
    return <div>
    <div>
    {/*{pages.map(pages=>{*/}
    {/*    return <span className = {props.currenPage === pages ? cl.selectedPage:""}*/}
    {/*    // return <span className = {props.currenPage === pages && cl.selectedPage}*/}
    {/*                 onClick={(event)=>{onPageChanged(pages)}}>{pages}</span>*/}
    {/*})}*/}

    {pages.map(pages => {
        return <button className={props.currenPage === pages ? cl.selectedPage : ""}
                       onClick={(event) => {props.onPageChanged(pages)}}>{pages}</button>
    })}

</div>
    {
        props.users.map((user: UserType) => <div key={user.id}>
                    <span>
                        <div className={cl.ava}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null
                                    ? user.photos.small
                                    : userPhoto} />
                                </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>

        </div>)
    }
</div>
}



export default Users;