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
import state, {AppStateType, StoreType} from "./components/redux/state";
import Friends from "./components/Friends/Friends";


type PropsType = {
    store: StoreType
    _state: AppStateType
    addPost: () => void
    updateNewPostText: (newText: string)=>void
    }

function App (props: PropsType){
    const _state = props.store.getState
       return (<div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props._state.dialogsPage.dialogs}
                                                                  messages={props._state.dialogsPage.messages} />}/>
                    <Route path="/profile" render={() => <Profile posts={props._state.profilePage.posts}
                                                                  newPostText={props._state.profilePage.newPostText}
                                                                  addPost={props.store.addPost}
                                                                  updateNewPostText ={props.store.updateNewPostText}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/friends" component={Friends}/>
                </div>
            </div>)


}

export default App;
