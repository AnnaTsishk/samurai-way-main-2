import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduser";
<<<<<<< HEAD
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

=======
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";
import StoreContext from "../.././../StoreContext"


const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store: ReduxStoreType) => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostActionCreator(state.profilePage.newPostText));
            }

            const onPostChange = (text: string) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action)
            }
            return <MyPosts posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                            addPost={addPost}
                            updateNewPostText={onPostChange}
                            store={store}/>
        }}
    </StoreContext.Consumer>

}
>>>>>>> origin/main
export default MyPostsContainer;