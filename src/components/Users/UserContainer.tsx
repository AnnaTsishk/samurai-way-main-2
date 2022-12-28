import React from 'react';
import {connect} from 'react-redux';
import {follow, setCurrentPage, setToggleFetching,setTotalUsersCount, setUsers, unfollow} from "../../redux/users-reduser";
import axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";



type UsersProps = {
    setUser: (users: any) => void
}

class UsersComponent extends React.Component<any, UsersProps> {
    componentDidMount() {
        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged=(pagesNumber:number)=>{
        this.props.setCurrentPage(pagesNumber)
        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currenPage={this.props.currenPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
        />
        </>
    }
}
let mapStareToProps=(state:any)=>{
    return{
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currenPage: state.usersPage. currenPage,
        isFetching: state.usersPage.isFetching

    }
}
// let mapDispatchToProps = (dispatch: any) => {
//     return {
        // follow: (userId: number) => {
        //     dispatch(followAC(userId))
        // },
        // unfollow: (userId: number) => {
        //     dispatch(unfollowAC(userId))
        // },
        // setUsers: (users: any) => {
        //     dispatch(setUsersAC(users))
        // },
        // setCurrentPage: (pagesNumber: number)=>{
        //     dispatch(setCurrentPageAC(pagesNumber))
        // },
        // setTotalUsersCount: (totalCount: number) => {
        //     dispatch(setTotalUsersCountAC(totalCount))
        // },
        // setToggleFetching: (isFetching: any) => {
        //     dispatch(setToggleFetchingAC(isFetching))
        // }
// }}
export default connect(mapStareToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleFetching
    }
) (UsersComponent);