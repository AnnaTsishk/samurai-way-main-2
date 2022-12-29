import React from "react";
import {Redirect} from "react-router-dom";

const LoginPage = (props: any) => {
    return <h1> LOGIN</h1>
    if (!props.isAuth) return <Redirect to={"/login"} /> ;
}

export default LoginPage