import {UsersPageType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initState: UsersPageType = {
    users: []
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
            return {...state,users: [...state.users,...action.users]}
            // return {...state,users: action.users}

        default:
            return state;
    }
}
export const followAC =(userId:number)=> ({type: FOLLOW, userId})
export const unfollowAC =(userId:number)=> ({type: UNFOLLOW, userId})
export const setUsersAC =(users:string)=> ({type: SET_USERS, users})



export default usersReducer;