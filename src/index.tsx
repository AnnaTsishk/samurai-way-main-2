import * as serviceWorker from "./serviceWorker"
import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";



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

serviceWorker.unregister();

