import {UsersPageType} from "./store";

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
    // id:2
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
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}
export const follow =(userId:number)=> ({type: FOLLOW, userId})
export const unfollow =(userId:number)=> ({type: UNFOLLOW, userId})
export const setUsers =(users:string)=> ({type: SET_USERS, users})
export const setCurrentPage =(currentPage: number)=> ({type: SET_CURREN_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number)=> ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const setToggleFetching = (isFetching: any)=> ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress =(isFetching: any, userId:number)=> ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export default usersReducer;