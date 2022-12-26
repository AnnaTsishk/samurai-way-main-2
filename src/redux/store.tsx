import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    newText: string
}
export type LocationType = {
    city: string
    country: string
}
export type UserType={
    id: number
    photoUrl: any
    photos: any
    followed: boolean
    fullName: string
    status: string
    location:  LocationType
 }
export type UsersPageType = {
    users: UserType[]

}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}
export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}
export type newPost = {
    id: number
    message: string
    likesCount: number
}
export type postMessage = {
    newPost: newPost
}
export type AddPostActionType = {
    type: 'ADD-POST'


}
export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type UpdateNewMessageBody = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageBody = {
    type: any

}
export type ActionTypes = ActionTypesType|ActionTypesBoy
export type ActionTypesType = AddPostActionType|ChangeNewTextActionType
export type ActionTypesBoy= UpdateNewMessageBody|SendMessageBody

export type StoreType = {
    _state: AppStateType
    _subscribe:(callback:()=>void) => void
    rerenderEntireTree: ()=>void
    getState:()=>AppStateType
    dispatch: (action: ActionTypesType|ActionTypesBoy)=>void

    }
export const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Slava'},
                {id: 3, name: 'Dasha'},
                {id: 4, name: 'Semion'},
                {id: 5, name: 'Alisa'},
                {id: 6, name: 'Roman'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 50},
                {id: 2, message: "It's my first post", likesCount: 60},
                {id: 3, message: "Yo", likesCount: 70},
                {id: 4, message: "Yo!", likesCount: 90}
            ],
            newPostText: "SAD",
            newText: ''
        },
        sidebar: {}
    },

    rerenderEntireTree(){
     },
    _subscribe(callback: ()=> void){
        this.rerenderEntireTree = callback
    },
    getState() {
        return this._state
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this.rerenderEntireTree();

    }
}

export default store