import styled from "styled-components";
import { InitButton } from '../../styles/button.style.jsx';
import { Heading } from '../../styles/Heading.style.jsx'
import variable from '../../styles/variable.style.jsx';

export const Layer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 50vw;
    border: 1px solid ${variable.border_gray};
    border-radius: 10px;
    &> div {
      font-size: 1.5rem;
    }
`

export const Header = styled.header`
    padding: 20px;
    margin-top: 20px; 
`

export const H1 = styled(Heading)``

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    & > input, button {
      padding: 10px;
      margin: 18px;
      font-size: 1.7rem;
      border: 1px solid ${variable.border_gray};
      border-radius: 5px;
      width: 95%;
    }
    &> button {
      background-color:${variable.dark_blue}
    }
`
export const Button = styled(InitButton)`
	background-color:${variable.green};
  text-align: center
`
