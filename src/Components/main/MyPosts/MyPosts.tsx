import React, {createRef} from 'react';
import {PostType} from "../../../redux/state";
import {Post} from "./Post/Post";


type MyPostsType = {
    posts:PostType[]
    addPost:(postTitle:string)=> void
    updatedPostText: string
    updateNewPostText:(postTitle:string)=> void
}

export const MyPosts = ({posts, addPost, updatedPostText, updateNewPostText}:MyPostsType) => {

    let newPostElement = createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            addPost(text)
            updateNewPostText('')
            // newPostElement.current.value = ''
        }
    }

    let onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            // console.log(text)
            updateNewPostText(text)
            // updatedPostText(text)
        }
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
