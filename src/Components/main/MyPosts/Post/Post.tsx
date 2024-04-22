import React from 'react';
import s from './../MyPosts.module.css';
import {PostType} from "../../../../redux/state";

type PostPropsType = {
    post:PostType[]
}

export const Post = ({post}:PostPropsType) => {
    return (
        <>
        {post.map(el => {
            return (
                <div key={el.id} className={s.post}>
                    <div>
                        <span>{el.message}</span>
                    </div>
                    <div>
                        <span>{el.likesCount} likes</span>
                    </div>
                </div>
            )
        })}

        </>
    );
};

