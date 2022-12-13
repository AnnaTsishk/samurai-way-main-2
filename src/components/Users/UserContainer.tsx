import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";
import Users from "./Users";
import {UserType} from "../../redux/store";


let mapStareToProps=(state:any)=>{
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStareToProps, mapDispatchToProps) (Users);