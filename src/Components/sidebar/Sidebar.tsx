import React from 'react';
import styled from "styled-components";
import {s} from './Sidebar_Styles'
import {NavLink} from 'react-router-dom';
import {friendsType} from "../../redux/state";

type SidebarType = {
    friends:friendsType[]
}

export const Sidebar = ({friends}:SidebarType) => {
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
                        <ul style={{display:'flex', listStyle:"none", gap:'10px', padding:'0'}}>
                            {friends.map(el => {
                                return (
                                    <li key={el.id}>{el.name}</li>
                                )
                            })}
                        </ul>
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