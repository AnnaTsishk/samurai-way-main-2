import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {detAutUserData} from "../../redux/auth-reducer";




class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.detAutUserData();
    }

    render() {
      return <Header {...this.props}/>
}
}
const mapStateToProps=(state:any)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps,{detAutUserData}) (HeaderContainer);