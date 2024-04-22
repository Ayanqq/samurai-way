import React from 'react';
import styled from "styled-components";
import {s} from './Sidebar_Styles'
import {NavLink} from 'react-router-dom';
import {SidebarType} from "../../redux/state";
import {Friends} from "./friends/Friends";

type SidebarPropsType = {
    sidebarPage:SidebarType
}

export const Sidebar = ({sidebarPage}:SidebarPropsType) => {
    return (
        <s.StyledSidebar>
            <StyledUl>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Messages</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>

                <div>
                    <h2>Friends</h2>
                    <div>
                        <Friends friendsData={sidebarPage.friends}/>
                    </div>
                </div>
            </StyledUl>

        </s.StyledSidebar>
    );
};

const StyledUl = styled.ul`
    padding:0;
    margin:20px;

    & > li {
        list-style: none;
        padding:5px;
        
    }

    & > li > a {
        text-decoration: none;
        color:black;
    }

    & > li > a:hover {
        color:white;
        border-bottom: 3px solid;
    }

    & > li >a:active {
        color:purple;
    }
    
`