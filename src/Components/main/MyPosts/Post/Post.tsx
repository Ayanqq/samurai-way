import React from 'react';

type PostType = {
    title:string;
}


export const Post = ({title}:PostType) => {
    return (
        <div>
            {title}
        </div>
    );
};

