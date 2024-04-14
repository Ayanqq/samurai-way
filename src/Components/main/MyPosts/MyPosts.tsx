import React, {createRef} from 'react';
import {Post} from "./Post/Post";
import {ProfilePageType, RootStateType} from "../../../redux/state";


export const MyPosts = ({posts}:ProfilePageType) => {

    const addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    //--Здесь зачем вопросик ? Или это как условный рендеринг?
    //- хуки в самурае не затрагиваются, потому что классовые компоненты ?

    let newPostElement = createRef<HTMLTextAreaElement>()

    return (
        <div>
            <div>My Posts</div>
            <div>
                <textarea placeholder='your news' ref={newPostElement}></textarea>
                <button onClick={addPost}>Add new post</button>
            </div>
            <div>
                <Post posts={posts}/>
            </div>
        </div>
    );
};
