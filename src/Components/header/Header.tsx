import React from 'react';
import styled from "styled-components";
import {theme} from '../../styles/Theme'
import {s} from './Header_Styles'

export const Header = () => {
    return (
        <s.StyledHeader>
            <a href="/">
            <s.Img src="https://cdn.worldvectorlogo.com/logos/starbucks.svg" alt="" />
            </a>
        </s.StyledHeader>
    );
};

