import React from 'react';
import styled from "styled-components";
import {theme} from '../../styles/Theme'

export const Header = () => {
    return (
        <StyledHeader>
            <Img src="https://cdn.worldvectorlogo.com/logos/starbucks.svg" alt=""/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
  background-color: ${theme.colors.bgc};
  grid-area: h;
  border:1px solid black;
`

const Img = styled.img`
  width:50px;
  
`
