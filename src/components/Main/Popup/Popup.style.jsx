import styled from "styled-components";
import variable from "../../../styles/variable.style.jsx";
import { InitButton } from "../../../styles/button.style.jsx";

export const BottomLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${variable.white};
  z-index: 100;
`;

export const PopupModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 252, 230);
  padding: 50px;
  z-index: 100;
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
`;

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 2%;
  right: 2%;
  padding: 12px 16px;
  border-radius: 50%;
  background-color: ${variable.gray_400};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 54px;
  font-size: 2em;
  padding: 20px;
  & > div {
    font-size: 1.5rem;
  }
`;

export const Title = styled.span`
  font-size: 2em;
  font-family: Lucida Sans Typewriter;
`;

export const Input = styled.input`
  width: 320px;
  padding: 10px;
  border: 1px solid ${variable.gray_500};
  margin: 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  outline: none;
  text-align: right;
  @media only screen and (max-width: 768px) {
    width: 200px;
  }

  ::placeholder {
    color: ${variable.gray_600};
    font-size: 1.4em;
    float: right;
    padding: 2px;
  }
`;

export const ConfirmButton = styled(InitButton)`
  background-color: ${variable.dark_blue};
  padding: 0px 47px;
`;
