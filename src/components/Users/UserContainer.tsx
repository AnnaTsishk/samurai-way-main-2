import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";
import axios from "axios";
import Users from "./Users";


type UsersProps = {
    setUser: (users: any) => void
}

class UsersComponent extends React.Component<any, UsersProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged=(pagesNumber:number)=>{
        this.props.setCurrentPage(pagesNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currenPage={this.props.currenPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}


let mapStareToProps=(state:any)=>{
    return{
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currenPage: state.usersPage. currenPage,

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
        },
        setCurrentPage: (pagesNumber: number)=>{
            dispatch(setCurrentPageAC(pagesNumber))
        },
        setTotalUsersCount:(totalCount: number)=>{
        dispatch(setTotalUsersCountAC(totalCount))
    }

    }
}
export default connect(mapStareToProps, mapDispatchToProps) (UsersComponent);