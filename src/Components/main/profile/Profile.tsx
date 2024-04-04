import React from "react";
import styled from "styled-components";

type ProfilePropsType = {
    src:string;
    alt:string;

};
export const Profile = ({src, alt}: ProfilePropsType) => {
    return (
        <div>
            <img
                src={src}
                alt={alt}/>
            <Description>
               Hell, my name is Ayan
            </Description>
        </div>
    );
};

const Description = styled.div `
  
  p {
    margin:0
  }
  
`