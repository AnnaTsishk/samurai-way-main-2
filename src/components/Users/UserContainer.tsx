import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setToggleFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reduser";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";




type UsersProps = {
    setUser: (users: any) => void
}

class UsersComponent extends React.Component<any, UsersProps> {
    componentDidMount() {
        this.props.setToggleFetching(true);

        usersAPI.getUsers(this.props.currenPage, this.props.pageSize).then(data => {
                this.props.setToggleFetching(false);
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }
    onPageChanged=(pagesNumber:number)=>{
        this.props.setCurrentPage(pagesNumber)
        this.props.setToggleFetching(true);

        usersAPI.getUsers(pagesNumber, this.props.pageSize).then(data => {
                this.props.setToggleFetching(false);
                this.props.setUsers(data.items)
            })
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currenPage={this.props.currenPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStareToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,
    setToggleFetching,toggleFollowingProgress}) (UsersComponent);