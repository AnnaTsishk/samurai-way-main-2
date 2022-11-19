import React from 'react';
import cl from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (<div>
        <div>
            <img src='https://biosfera92.ru/images/stati/ecology.JPG'/>
        </div>
        <div className={cl.descriptionBlock}>ava+description</div>

    </div>)
}
export default ProfileInfo;