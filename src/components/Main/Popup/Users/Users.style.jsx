import styled from "styled-components";

export const Title = styled.p`
    font-size: 1.4em;
    padding: 5px;
    text-align: center;
    margin: 16px;
`

export const Wrapper = styled.div`
    text-align: center;
    font-size: 1.6em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    border: 1px solid gray;
    width: 160%;
    padding: 3px;
    ::placeholder {
      color: grey;
      font-size: 1em;
      text-transform: uppercase;
}
`

export const SearchButton =styled.button`
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
	background-color:#ededed;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#777777;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:3px 12px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
  margin: 10px 0px;
}
:hover {
	background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	background-color:#dfdfdf;
}
:active {
	position:relative;
	top:1px;`