import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";


let rerenderEntireTree =()=> {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();

