import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: 'Raleway',sans-serif; 
  font-size: 50px; 
  font-weight: 800;
  text-transform: uppercase
}
`;

export const Heading = ({ children, className }) => (
  // console.log(className) child className
  <H1 className={className}>{children}</H1>
);
