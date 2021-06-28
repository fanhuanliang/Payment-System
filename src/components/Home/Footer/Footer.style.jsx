import styled from "styled-components";

export const Wrapper = styled.div`
    width: 80%;
    margin: auto;
`

export const Container = styled.div`
    // margin: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 1.7em;
`
export const UnOrderList = styled.ul`
    display: flex;
    list-style-type: none;
    }
`
export const List = styled.li`
  padding-left: 10px;
`

export const Button = styled.button`
	box-shadow:inset 0px 1px 0px 0px #97c4fe;
	background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
	background-color:#3d94f6;
	border-radius:6px;
	border:1px solid #337fed;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:2px 12px;
	text-decoration:none;
	text-shadow:0px 1px 0px #1570cd;
}
:hover {
	background:linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
	background-color:#1e62d0;
}
:active {
	position:relative;
	top:1px;
`