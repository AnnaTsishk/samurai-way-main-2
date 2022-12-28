import React from 'react';
import cl from "./Users.module.css";
import {UserType} from "../../redux/store";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";



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
                                ? <button disabled={props.followingInProgress.some((id: number) => id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,{
                                        withCredentials: true,
                                        headers: {
                                            'API_KEY': '05db3c44-fd34-4fff-9842-5515e51c0f83'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0){
                                                props.unfollow(user.id) }
                                            props.toggleFollowingProgress(false, user.id);
                                        });
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some((id: number) =>id === user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,{},{
                                        withCredentials:true,
                                        headers: {
                                            'API_KEY': '05db3c44-fd34-4fff-9842-5515e51c0f83'
                                        }
                                    })
                                        .then(response => {
                                         if (response.data.resultCode == 0){
                                           props.follow(user.id) }
                                            props.toggleFollowingProgress(false, user.id);
                                        });
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