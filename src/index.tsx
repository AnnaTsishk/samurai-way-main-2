import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
<<<<<<< HEAD
import {Provider} from "react-redux";
=======
import {Provider} from "./StoreContext";
>>>>>>> origin/main




<<<<<<< HEAD
//
// let rerenderEntireTree = () => {
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
// }
// store.subscribe(rerenderEntireTree);
// rerenderEntireTree();
=======
let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();
>>>>>>> origin/main

