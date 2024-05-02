import React from 'react';
import {s} from './Main_Styles'
import {MyPosts} from "./MyPosts/MyPosts";
import {Profile} from "./profile/Profile";
import Photo1 from "./../../assets/Asana3808_Dashboard_Standard.jpg"
import Photo2 from "./../../assets/4k-beautiful-nature-abstract-background_939808-11390.avif"
import {ProfilePageType} from "../../redux/state";

type MainPropsType = {
    profilePage:ProfilePageType
    addPost:(postTitle:string)=> void
    updateNewPostText:(postTitle:string)=> void
}

export const Main = ({profilePage, addPost, updateNewPostText}:MainPropsType) => {
    return (
        <s.StyledMain>
            <img src={Photo2}
                 alt="KAKOE TO FOTO"/>
            <s.ProfileInfo>
                <Profile src={Photo1} alt={'smth photo'}/>
            </s.ProfileInfo>

            <MyPosts posts={profilePage.posts}
                     addPost={addPost}
                     updatedPostText={profilePage.newPostText}
                     updateNewPostText={updateNewPostText}
            />

        </s.StyledMain>
    );
};



