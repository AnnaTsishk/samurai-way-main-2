import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostsType} from "../redux/state";



type ProfilePropsType = {
    posts: PostsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string)=>void
}

const Profile = (props: ProfilePropsType)=> {
    return (<div>
        <ProfileInfo />
        <MyPosts posts={props.posts}
                 newPostText={props.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
        />
        </div>)
}


export default Profile;