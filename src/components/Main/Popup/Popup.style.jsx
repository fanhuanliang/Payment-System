import styled from "styled-components";

export const BottomLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  background-color: rgb(255, 255, 255);
  zIndex: 100;
`

export const PopupModal = styled.div`
  position: fixed;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 252, 230);
  padding: 50px;
  zIndex: 100;
  width: 50vw;
  height: 80vh;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 10px 10px black;
  display: flex;
  line-height: 30px;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 2%;
  right: 2%;
  padding: 12px 16px;
  border-radius: 50%;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 54px;
    font-size: 2em;
    padding: 20px;
`

export const Title = styled.span`
  font-size: 2em;
  font-family:Lucida Sans Typewriter;
`

export const Input = styled.input`
    width: 180%;
    padding: 10px;
    border: 1px solid grey;
    margin: 20px;
    border-radius: 5px;
    ::placeholder {
      color: grey;
      font-size: 1.4em;
      float: right;
      padding:2px;
`

export const ConfirmButton = styled.button`
	box-shadow:inset 0px 1px 0px 0px #dcecfb;
	background:linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
	background-color:#bddbfa;
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
}
:hover {
	background:linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);
	background-color:#80b5ea;
}
:active {
	position:relative;
	top:1px;
`