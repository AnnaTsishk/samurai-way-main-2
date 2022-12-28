import {UsersPageType} from "./store";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURREN_PAGE = 'SET_CURREN_PAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS='TOGGLE_IS_FOLLOWING_PROGRESS';

const initState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currenPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initState, action: any) => {
    switch (action.type) {
        case FOLLOW:
          return {
               ...state,
              // users: [...state.users],
              users: state.users.map(user=>{
                 if (user.id === action.userId) {
                     return {...user, followed:true}
                  }
                  return user;
        })
          }
        case UNFOLLOW:
            return {
                ...state,
            users: state.users.map(user=>{
                if (user.id === action.userId) {
                    return {...user, followed: false}
                }
                return user})
            }
        case SET_USERS:
            return {...state,users: action.users}
            // return {...state,users: action.users}
        case SET_CURREN_PAGE:
            return {...state,currenPage: action.currenPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state,totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state,isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}
export const followSuccess =(userId:number)=> ({type: FOLLOW, userId})
export const unfollowSuccess =(userId:number)=> ({type: UNFOLLOW, userId})
export const setUsers =(users:string)=> ({type: SET_USERS, users})
export const setCurrentPage =(currentPage: number)=> ({type: SET_CURREN_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number)=> ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const setToggleFetching = (isFetching: any)=> ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress =(isFetching: any, userId:number)=> ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currenPage: any, pageSize: any) => {
    return (dispatch: any) => {
        dispatch(setToggleFetching(true));

        usersAPI.getUsers(currenPage, pageSize).then(data => {
            dispatch(setToggleFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId:number) => {
    return (dispatch: any) => {
        dispatch (toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch (followSuccess(userId))
                }
                dispatch (toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId:number) => {
    return (dispatch: any) => {
        dispatch (toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch (unfollowSuccess(userId))
                }
                dispatch (toggleFollowingProgress(false, userId));
            });
    }
}
export default usersReducer;