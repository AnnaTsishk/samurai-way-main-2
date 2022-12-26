import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store  from "./components/redux/state";


let rerenderEntireTree =()=> {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                _state={store._state}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}

            />
        </BrowserRouter>, document.getElementById('root'));
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();



