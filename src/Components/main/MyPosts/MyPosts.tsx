import React, {createRef} from 'react';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts:PostType[]
    addPost:(postTitle:string)=> void
    updatedPostText: string
}

export const MyPosts = ({posts, addPost, updatedPostText}:MyPostsType) => {

    let newPostElement = createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            addPost(text)
            newPostElement.current.value = ''
        }
    }

    let onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            console.log(text)
        }
        // console.log(newPostElement.current?.value)
    }

    return (
        <div>
            <div>My Posts</div>
            <div>
                <textarea placeholder='your news'
                          ref={newPostElement}
                          onChange={onChangeHandler}
                          value={updatedPostText}
                />
                <button onClick={addPostHandler}>Add new post</button>
            </div>
            <div>
                <Post post={posts}/>
            </div>
        </div>
    );
};
