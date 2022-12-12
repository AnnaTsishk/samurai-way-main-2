import {ActionTypes, AddPostActionType, ChangeNewTextActionType, PostsType, ProfilePageType} from "./store";


const initState:ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 50},
        {id: 2, message: "It's my first post", likesCount: 60},
        {id: 3, message: "Yo", likesCount: 70},
        {id: 4, message: "Yo!", likesCount: 90}
    ],
    newPostText: "SAD",
    newText: ''
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state = initState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: new Date().getDate(),
                message: state.newPostText,
                likesCount: 100
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const updateNewPostTextActionCreator = (text: string): ChangeNewTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    } as const
}
export default profileReducer;