import React from 'react';
import s from './../MyPosts.module.css';
import {ProfilePageType} from "../../../../redux/state";



export const Post = ({posts}:ProfilePageType) => {
    return (
        <>
        {posts.map(el => {
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

