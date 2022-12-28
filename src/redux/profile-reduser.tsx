import {AddPostActionType, ChangeNewTextActionType, ProfilePageType} from "./store";


const initState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 50},
        {id: 2, message: "It's my first post", likesCount: 60},
        {id: 3, message: "Yo", likesCount: 70},
        {id: 4, message: "Yo!", likesCount: 90}
    ],
    newPostText: "SAD",
    newText: '',
    profile: null
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const profileReducer = (state = initState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                // id: 5,
                id: new Date().getDate(),
                message: state.newPostText,
                likesCount: 100
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: "ADD-POST"})
export const setUserProfile = (profile:any) => ({type: "SET_USER_PROFILE", profile})
export const updateNewPostTextActionCreator = (text: string): ChangeNewTextActionType =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: text})

export default profileReducer;