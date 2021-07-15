import styled from "styled-components";
import variable from '../../styles/variable.style.jsx';
import { InitButton } from '../../styles/button.style.jsx';
import { Heading } from '../../styles/Heading.style.jsx'

const TopLayer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  border: 1px solid ${variable.border_gray};
  width: 700px;
  border-radius: 10px;
  padding: 20px;
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
  &> a, input, button {
    font-size: 20px;
    padding: 20px;
    margin: 20px;
  }
  &> div {
    font-size:1.5rem;
  }
  flex-direction: column;
  }
`
const Header = styled(Heading)``


const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  &> div,button {
    font-size: 20px;
    padding: 20px;
    margin: 5px 20px;
    // background-color:${variable.light_blue};
  }
  &> a button{
    background-color:${variable.light_blue};
    border:0px;
  }
`
const Middle = styled.div`
  border-top: 1px solid ${variable.border_gray};
`
const Button = styled(InitButton)`
	background-color:${variable.dark_blue};
  width: 95%;
`

export {
  Wrapper,
  container,
  Form,
  BottomContainer,
  Middle,
  TopLayer,
  Button,
  Header
}