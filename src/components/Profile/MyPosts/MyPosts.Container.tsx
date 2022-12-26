import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduser";
import {connect} from "react-redux";
import {ActionTypesBoy, ActionTypesType, PostsType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {AppStateType, ReduxStoreType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: PostsType[]
    newPostText: string

    }
type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void

}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionTypesType | ActionTypesBoy) => void):MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;