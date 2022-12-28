import React from 'react';
import cl from './Post.module.css';
import user2 from "../../../../assets/images/user2.png";

type PostPropsType = {
    message: string
    likesCount: number
    id:number
}
const Post = (props:PostPropsType)=> {
    return (
       <div className={cl.item}>
           <img src={user2}/>
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