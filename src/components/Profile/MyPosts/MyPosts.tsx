import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/store";
import {ReduxStoreType} from "../../../redux/redux-store";


type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string

    addPost: () => void
    updateNewPostText: (text: string) => void


}
const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost=()=>{
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }
    }

    return (<div>
             <div className={cl.postsBlock}>
                <h3>My posts</h3>
             </div>
             <div>
                 <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={cl.posts}>{postsElements}</div>
        </div>)
}
export default MyPosts;