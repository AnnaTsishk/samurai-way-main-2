import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {ActionTypesBoy, ActionTypesType, StoreType} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";


type PropsType = {
    store: ReduxStoreType
    dispatch:(action: ActionTypesType|ActionTypesBoy)=>void

 }

function App (props: PropsType){
    const state = props.store.getState();
       return (<div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs store = {props.store}/>}/>

                    <Route path="/profile" render={() => <Profile posts={state.profilePage.posts}
                                                                  newPostText={state.profilePage.newPostText}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/friends" component={Friends}/>
                </div>
            </div>)


}

export default App;
