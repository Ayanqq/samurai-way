import React from 'react';
import styled from "styled-components";
import {theme} from '../../styles/Theme'
import {s} from './Header_Styles'

export const Header = () => {
    return (
        <s.StyledHeader>
            <s.Img src="https://cdn.worldvectorlogo.com/logos/starbucks.svg" alt=""/>
        </s.StyledHeader>
    );
};

