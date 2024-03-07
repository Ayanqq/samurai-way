import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Sidebar = () => {
    return (
        <StyledSidebar>
            <ul>
                <li><a href="">Profile</a></li>
                <li><a href="">Messages</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Music</a></li>
                <li><a href="">Settings</a></li>
            </ul>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.nav`
  grid-area: n;
  background-color: ${theme.colors.bgc};
  border:1px solid black;
`