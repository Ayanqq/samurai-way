import styled from "styled-components";
import {theme} from "../../styles/Theme";

const StyledHeader = styled.header `
  background-color: ${theme.colors.bgc};
  grid-area: h;
  border:1px solid black;
`

const Img = styled.img`
  width:50px;
  
`

export const s = {
    StyledHeader,
    Img
}