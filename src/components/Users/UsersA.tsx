import React from 'react';
// import cl from "./Users.module.css"
// import {UserType} from "../../redux/store";
// import axios from "axios";
// import userPhoto from '../../assets/images/user.png';
//
// const UsersA = (props: any) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     props.setUsers(response.data.items)
//                 })
//         }
//     }
//     return (<div>
//             <button onClick={getUsers}>GetUsers</button>
//             {
//                 props.users.map((user: UserType) => <div key={user.id}>
//                     <span>
//                         <div className={cl.ava}>
//                            {/*<img src={user.photoUrl}/>*/}
//                             <img src={user.photos.small !=null
//                                 ? user.photos.small
//                                 : userPhoto
//                             }/>
//                         </div>
//                         <div>
//                             {user.followed
//                                 ? <button onClick={()=>{props.unfollow(user.id)}}>Unfollow</button>
//                                 : <button onClick={()=>{props.follow(user.id)}}>Follow</button>}
//                         </div>
//                     </span>
//                     <span>
//                         <span>
//                             <div>{user.fullName}</div>
//                             <div>{user.status}</div>
//                         </span>
//                         <span>
//                             <div>{'user.location.country'}</div>
//                             <div>{'user.location.city'}</div>
//                         </span>
//                     </span>
//
//                 </div>)
//             }
//         </div>
//     )
// }
// export default UsersA