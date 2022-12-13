import React from 'react';
import cl from "./Users.module.css"
import {UserType} from "../../redux/store";
import axios from "axios";
import userPhoto from '../../assets/images/user.png';
import {inspect} from "util";



type UsersProps = {
    setUser: (users: any) => void
}


class Users extends React.Component<any, UsersProps> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
        render()
            {
                return <div>
                    <div>
                        <span>1</span>
                        <span className={cl.selectedPage}>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                    {
                        this.props.users.map((user: UserType) => <div key={user.id}>
                    <span>
                        <div className={cl.ava}>
                           {/*<img src={user.photoUrl}/>*/}
                            <img src={user.photos.small != null
                                ? user.photos.small
                                : userPhoto
                            }/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>

                        </div>)
                    }
                </div>

            }
        }


export default Users;