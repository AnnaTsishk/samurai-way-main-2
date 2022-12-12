import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionTypesType, PostsType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduser";




type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionTypesType)=>void

}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText));
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch(updateNewPostTextActionCreator(text));
        }
    }
    return (
        <div>
            <div className={cl.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={cl.posts}>{postsElements}</div>
        </div>)
}
export default MyPosts;