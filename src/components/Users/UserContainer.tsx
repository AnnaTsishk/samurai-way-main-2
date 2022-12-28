import React from 'react';
import {connect} from 'react-redux';
import {followSuccess, getUsers, setCurrentPage,
    toggleFollowingProgress, unfollowSuccess} from "../../redux/users-reduser";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";




type UsersProps = {
    setUser: (users: any) => void
}

class UsersComponent extends React.Component<any, UsersProps> {
    componentDidMount() {
        this.props.getUsers(this.props.currenPage, this.props.pageSize);
    }
    onPageChanged=(pagesNumber:number)=>{
        this.props.getUsers(pagesNumber, this.props.pageSize)
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
                   // toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    follow: followSuccess, unfollow: unfollowSuccess, setCurrentPage, toggleFollowingProgress, getUsers}) (UsersComponent);