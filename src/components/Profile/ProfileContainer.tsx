import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reduser";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps =(state:any)=>({
   profile:state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect (mapStateToProps,{setUserProfile}) (WithUrlDataContainerComponent);