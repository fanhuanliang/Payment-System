import { Link } from 'react-router-dom'
import styled from "styled-components";

export const Header = styled.header`
    position: sticky;
    top: 0;

`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    // margin-bottom: 20px;
    background-color: rgb(224, 230, 239);
`

export const Container = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-size: 3em;
    font-family: Comic Sans, Comic Sans MS, cursive;
    padding: 20px;
`

export const rightSide = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20%;
    font-size: 0.8em;
    > * {
      &:first-child {
      background-color:#44c767;
      border:1px solid #18ab29;
      text-shadow:0px 1px 0px #2f6627;
      :hover {
	      background-color:#5cbf2a;
}
    }

    @media only screen and (max-width: 770px) {
      width: 30%; 
    };
`

export const NewLink = styled(Link)`
	background-color:#007dc1;
	border-radius:28px;
	border:1px solid #124d77;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:14px;
	padding:8px 15px;
	text-decoration:none;
	text-shadow:0px 1px 0px #154682;
  min-width: 84px;
  max-height: 40px;
}
:hover {
	background-color:#0061a7;
}
:active {
	position:relative;
	top:1px;
`