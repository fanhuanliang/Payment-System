import styled from "styled-components";
import * as init from '../../index.style.jsx';

const TopLayer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  border: 1px solid ${init.color.border_gray};
  width: 700px;
  border-radius: 10px;
  height: 800px;
  top: 10%;
  position: absolute;
    @media only screen and (max-width: 640px) {
      width: 500px;
    };
`
const container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  text-align: center
  
  `
  const Form = styled.form`
  display: flex;
  &> div, input, button {
    font-size: 20px;
    padding: 20px;
    margin: 20px;
  }
  flex-direction: column;
  }
`
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  &> div,button {
    font-size: 20px;
    padding: 20px;
    margin: 5px 20px;
  }
  &>button {
    background-color:${init.color.light_blue};
    border:0px;
  }
`
const Middle = styled.div`
  border-top: 1px solid ${init.color.border_gray};
`
const Button = styled.button`
	background-color:${init.color.dark_blue};
	border-radius:5px;
	border:1px solid #4e6096;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	text-decoration:none;
  width: 92%;
`

export {
  Wrapper,
  container,
  Form,
  BottomContainer,
  Middle,
  TopLayer,
  Button,
}