import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer

});


export type AppStateType= ReturnType <typeof rootReducer>;

export type ReduxStoreType = typeof store;
let store = createStore(rootReducer);


export default store;