import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionTypes, PostsType} from "../../redux/store";



type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionTypes)=>void
}

const Profile = (props: ProfilePropsType)=> {
    return (<div>
        <ProfileInfo />
        <MyPosts posts={props.posts}
                 newPostText={props.newPostText}
                 dispatch={props.dispatch}

        />
        </div>)
}


export default Profile;