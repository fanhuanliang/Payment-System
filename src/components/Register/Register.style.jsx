import styled from "styled-components";
import * as init from '../../index.style.jsx';

export const Layer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    align-items: center;
    margin: auto;
    width: 50vw;
    border: 1px solid ${init.color.border_gray};
    border-radius: 10px;
`

export const Header = styled.div`
    font-family: emoji;
    font-size: 1.2em;
    padding: 10px;
    margin: 10px; 
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    & > input, button {
      padding: 10px;
      margin: 10px;
      font-size: 20px;
      border: 1px solid ${init.color.border_gray};
      border-radius: 5px;
      width: 95%;
    }
`
export const Button = styled.button`
	background-color:${init.color.dark_blue};
	border-radius:5px;
	border:1px solid #4e6096;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
`

export const LogInButton = styled.button`
	box-shadow:inset 0px 1px 3px 0px #d9fbbe;
	background:linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%);
	background-color:#b8e356;
	border-radius:5px;
	border:1px solid #83c41a;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:11px 23px;
	text-decoration:none;
  width: 95%;
  :hover {
	background:linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
	background-color:#a5cc52;
  }
  :active {
	position:relative;
	top:1px;
}
`