import React from 'react';

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
    export type DialogsPageType = {
        dialogs: DialogsType[]
        messages: MessagesType[]
    }
    export type AppStateType = {
        profilePage: ProfilePageType
        dialogsPage: DialogsPageType
    }
    export type newPost = {
        id: number
        message: string
        likesCount: number
    }
    export type postMessage = {
        newPost: newPost
    }

export type StoreType = {
    _state: AppStateType
    updateNewPostText: (newText: string)=> void
    addPost:()=>void
    rerenderEntireTree: ()=>void
    subscribe:(callback:()=>void) => void
    getState:()=>AppStateType
}
const store: StoreType = {
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
                ]
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
            }
    },
    updateNewPostText(newText: string){
        console.log('updateNewPostText', this)
       this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree();
    },
    addPost() {
        console.log('addPost', this)
        const newPost = {
            id: new Date().getDate(),
            message: this._state.profilePage.newPostText,
            likesCount: 100
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this.rerenderEntireTree();
    },

    rerenderEntireTree(){
        console.log("hello")
    },
    subscribe(callback){
        this.rerenderEntireTree = callback
    },
    getState(){
        return this._state
    }
}

export default store