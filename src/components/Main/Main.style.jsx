import styled from "styled-components";

export const Container = styled.section`
  min-height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
`

export const Box = styled.div`
    border: 1px solid grey;
    min-width: 50%;
    padding: 30px;
    min-height: 80vh;
    border-radius: 10px;
    border-radius: 10px;
    box-shadow: 9px 10px grey;
    text-align: center;
`
export const Title = styled.h1`
    font-family: Bradley Hand,sans-serif;
    line-height: 5em;
    
`

export const Heading = styled.div`
    text-align: center;
    font-size: 3em;
    font-family: Apple Chancery, Verdana, sans-serif;
`
export const Paragraph = styled.p`
    font-family: Copperplate, Verdana, sans-serif;
    margin-bottom: 10px
`

export const Button = styled.button`
	box-shadow:inset 0px 1px 0px 0px #bbdaf7;
	background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
	background-color:#79bbff;
	border-radius:6px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528ecc;
    :hover {
	    background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
	    background-color:#378de5;
    }
    :active {
	    position:relative;
	    top:1px;
    }   
`