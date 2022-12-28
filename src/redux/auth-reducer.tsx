


const SET_USER_DATA = 'SET_USER_DATA';


// export type UserIdPageType = {
//     userId: number
//     // id: number
//     email: string
//     login: string
//     isFetching: boolean
//
// }

// const initialState:UserIdPageType = {
//     userId: 2,
//     // id: 2,
//     email: 'blabla@bla.bla',
//     login: 'samurai',
//     isFetching: true
//
// }
export type UserIdPageType = {
    id: any
    email: any
    login: any
    isAuth: boolean
}
const initialState:UserIdPageType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
export const setAuthUserData =(userId:any, email: any, login: any)=> ({type: SET_USER_DATA,data:{userId,email,login}})

export default authReducer;