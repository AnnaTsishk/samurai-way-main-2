import React from 'react';
import cl from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (<div>
        <div>
            <img src='https://biosfera92.ru/images/stati/ecology.JPG'/>
        </div>
        <div className={cl.ava}>
        <img src={props.profile.photos.large}/>
            ava+description
        </div>
    </div>)
}
export default ProfileInfo;