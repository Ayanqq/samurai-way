import React from 'react';
import styled from "styled-components";

export const Content = () => {
    return (
        <StyledMain>
            <img src="https://img.freepik.com/premium-photo/4k-beautiful-nature-abstract-background_939808-11390.jpg"
                 alt="KAKOE TO FOTO"/>
            <ProfileInfo>
                <img
                    src="https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k"
                    alt="profile_photo"/>
                <p>Ayan N. + description</p>
            </ProfileInfo>
            <div>My Posts</div>
            <div><textarea placeholder='your news'></textarea></div>
            <div>Post1</div>
            <div>Post2</div>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  grid-area: c;
  border: 1px solid black;

`
const ProfileInfo = styled.div`
  display: flex;

  img {
    width: 200px;
  }
`
