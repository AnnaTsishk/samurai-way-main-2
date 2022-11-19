import React from 'react';
import cl from './Post.module.css';
import Profile from "../../Profile";

type PostPropsType = {
    message: string
    likesCount: number
    id:number
}
const Post = (props:PostPropsType)=> {
    return (
       <div className={cl.item}>
           <img src='https://kartinkin.net/uploads/posts/2022-03/1646130613_1-kartinkin-net-p-kartinki-o-smisle-zhizni-1.jpg'/>
       <div>
           {props.message}
       </div>

       <div>
           <span>like</span> {props.likesCount}
       </div>
       </div>
    )
}
export default Post;