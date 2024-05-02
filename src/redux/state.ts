import {rerenderEntireTree} from "../render";



export type PostType = {
    id:number
    message:string
    likesCount:number
}

export type MessageType = {
    id:number
    name:string
}

export type DialogType = {
    id:number
    name:string
}

export type FriendType = {
    id:number
    name:string
    avatar:string
}

export type ProfilePageType = {
    posts:PostType[]
    newPostText:string
}

export type MessagesPageTypes = {
    messages:MessageType[]
    dialogs:DialogType[]
}

export type SidebarType = {
    friends:FriendType[]
}

export type RootStateType = {
    profilePage: {
        posts: PostType[]
        newPostText: string
    }
    messagesPage: {
        messages:MessageType[],
        dialogs:DialogType[]
    }
    sidebarPage: {
        friends:FriendType[]
    }
}


export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello everyone', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'It\'s my second post', likesCount: 0},
        ],
        newPostText: 'IT-INCUBATOR'
    },
    messagesPage: {
        messages: [
            {id: 1, name: 'Hi!'},
            {id: 2, name: 'How are you ?'},
            {id: 3, name: 'You are welcome!'},
            {id: 4, name: 'Bye!'},
        ],
        dialogs: [
            {id: 1, name: 'Ayan'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Boris'},
            {id: 4, name: 'Vasya'},
        ],
    },
    sidebarPage: {
        friends: [
            {id: 1, name: 'Sasha', avatar: ''},
            {id: 1, name: 'Boris', avatar: ''},
        ],
    }
}

console.log(state)

export const addPost = (postMessage:string) => {
    let newPost = {id: 4, message:postMessage, likesCount: 0};
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newPost:string) => {
    state.profilePage.newPostText = newPost
    rerenderEntireTree(state)
}
