import styled from "styled-components";
import { InitButton } from "../../../styles/button.style.jsx";
import { Heading } from "../../../styles/Heading.style.jsx";
import variable from "../../../styles/variable.style.jsx";

export const Header = styled.header`
  position: sticky;
  top: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${variable.blue};
`;
export const H1 = styled(Heading)``;

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: 3em;
  font-family: Comic Sans, Comic Sans MS, cursive;
  padding: 20px;
`;

export const rightSide = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 0.8em;
    & > a {
      margin-right: 10px;
    }
    > * {
      &:first-child button {
      background-color:${variable.dark_green};
    }

    @media only screen and (max-width: 770px) {
      width: 30%; 
    };
`;

export const Button = styled(InitButton)`
  background-color: ${variable.dark_blue};
  min-width: 90px;
  max-height: 40px;
  font-size: 14px;
  border-radius: 28px;
  padding: 8px 15px;
  text-align: center;
`;
