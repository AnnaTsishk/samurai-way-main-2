import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";




// export type CreateStoreType = {
//     store: StoreType
// }
// export type CombineReducersType ={
//     reducers: any
// }


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer

});

let store = createStore(reducers)
export type ReduxStoreType =typeof store;


export default store;