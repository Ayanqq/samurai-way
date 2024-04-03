import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {s} from './Sidebar_Styles'

export const Sidebar = () => {
    return (
        <s.StyledSidebar>
            <ul>
                <li><a href="">Profile</a></li>
                <li><a href="">Messages</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Music</a></li>
                <li><a href="">Settings</a></li>
            </ul>
        </s.StyledSidebar>
    );
};
