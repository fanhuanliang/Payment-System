import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: ${backgroundColor};
	border-radius:5px;
	border:1px solid #83c41a;
	display:inline-block;
	cursor:pointer;
	color:${color};
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:11px 23px;
	text-decoration:none;
  width: ${width};
  :hover {
	background-color:${hoverColor};
  }
  :active {
	position:relative;
	top:1px;
}
`;

export const InitButton = ({ children, className, backgroundColor, color, width = '100%', hoverColor="none"}) => {
  return <Button className={className}>{children}</Button>;
};