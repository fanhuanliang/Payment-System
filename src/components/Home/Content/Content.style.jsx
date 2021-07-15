import styled from "styled-components";
import variable from "../../../styles/variable.style.jsx";
import { Heading } from "../../../styles/Heading.style.jsx";

export const Wrapper = styled.div`
  background-color: ${variable.teal};
  min-height: 80vh;
  margin: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  > h1,
  li {
    padding: 20px;
    margin: 20px;
    color: #557e94;
  }
  @media only screen and (max-width: 1000px) {
    justify-content: center;
    flex-direction: column;
  } ;
`;

export const LeftSide = styled.div`
  font-size: 2em;
  margin: auto;
`;

export const UnOrderList = styled.ul`
  list-style-type: none;
`;

export const H1 = styled(Heading)`
  font-size: 2.2rem;
  padding: 15px;
  margin: 15px;
`;
