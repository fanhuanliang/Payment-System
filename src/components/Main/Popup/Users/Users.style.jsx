import styled from "styled-components";
import variable from "../../../../styles/variable.style.jsx";
import { InitButton } from "../../../../styles/button.style.jsx";

export const Title = styled.p`
  font-size: 1.4em;
  padding: 5px;
  text-align: center;
  margin-top: 16px;
`;

export const Wrapper = styled.div`
  text-align: center;
  font-size: 1.6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > button {
    background-color: ${variable.cyan};
    width: 100%;
  }
`;

export const Input = styled.input`
    border: 1px solid gray;
    width: 100%;
    padding: 5px;
    margin: 10px 0px;
    border-radius: 5px;
    outline: none;
    max-width: 57%;
    font-size: 1.4rem
    text-align: right;
    @media only screen and (max-width: 768px) {
      width: 200px;
    }
    ::placeholder {
      color: grey;
      font-size: 1em;
      text-transform: uppercase;
      float: right;
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  & > div {
    font-size: 1.5rem;
  }
`;

export const Button = styled(InitButton)`
  background-color: ${variable.gray_400};
`;
