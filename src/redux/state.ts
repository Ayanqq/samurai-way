export type PostsType = {
    id: number;
    message: string;
    likesCount: number
}

export type DialogsType = {
    id: number;
    name: string;
}

export type MessagesType = {
    id: number;
    name: string;
}

export type ProfilePageType = {
    posts: PostsType[]

}

export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type friendsType = {
    id: number;
    name: string;
    avatar: string;
}

export type SidebarPageType = {
    friends: friendsType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebarPage: SidebarPageType
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello everyone', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'It\'s my second post', likesCount: 0},
        ],
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

