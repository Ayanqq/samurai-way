import React from 'react';
import {s} from './Main_Styles'
import styled from "styled-components";
import {MyPosts} from "./MyPosts/MyPosts";

export const Content = () => {
    return (
        <s.StyledMain>
            <img src="https://img.freepik.com/premium-photo/4k-beautiful-nature-abstract-background_939808-11390.jpg"
                 alt="KAKOE TO FOTO"/>
            <s.ProfileInfo>
                <img
                    src="https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k"
                    alt="profile_photo"/>
                <Description>
                    <h3>Ayan N.</h3>
                    <p>Date of Birth: 16 May</p>
                    <p>City: Almaty</p>
                    <p>Education: NO</p>
                    <p>Web-site: NO</p>
                </Description>
            </s.ProfileInfo>

            <MyPosts/>

        </s.StyledMain>
    );
};

const Description = styled.div `
  padding-left:20px;
  
  p {
    margin:0
  }
  
`

