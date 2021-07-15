import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #b8e356;
  border-radius: 5px;
  border: 1px solid;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 11px 23px;
  text-decoration: none;
  :active {
    position: relative;
    top: 1px;
  }
`;

export const InitButton = ({ children, className, onClick }) => (
  // console.log(className) child className
  <Button className={className} onClick={onClick}>
    {children}
  </Button>
);
