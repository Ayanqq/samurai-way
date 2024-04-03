import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>My Posts</div>
            <div>
                <textarea placeholder='your news'></textarea>
                <button>Send</button>
            </div>
            <Post title={'Hello everyone'}/>
            <Post title={'I Love everyone'}/>
        </div>
    );
};
