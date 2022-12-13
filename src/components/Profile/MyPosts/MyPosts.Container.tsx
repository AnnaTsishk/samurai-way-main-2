import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduser";
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
export default MyPostsContainer;