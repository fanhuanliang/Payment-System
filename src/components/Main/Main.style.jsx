import styled from "styled-components";
import variable from "../../styles/variable.style.jsx";
import { InitButton } from "../../styles/button.style.jsx";
import { Heading } from "../../styles/Heading.style.jsx";

export const Container = styled.section`
  min-height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
`;

export const Box = styled.div`
  border: 1px solid ${variable.border_gray};
  min-width: 50%;
  padding: 30px;
  min-height: 80vh;
  border-radius: 10px;
  border-radius: 10px;
  box-shadow: 9px 10px ${variable.gray_600};
  text-align: center;
`;
export const H1 = styled(Heading)`
  font-family: Bradley Hand, sans-serif;
  line-height: 5em;
`;

export const Balance = styled.div`
  text-align: center;
  font-size: 3em;
  font-family: Apple Chancery, Verdana, sans-serif;
`;
export const Paragraph = styled.p`
  font-family: Copperplate, Verdana, sans-serif;
  margin-bottom: 10px;
`;

export const Button = styled(InitButton)`
  background-color: ${variable.dark_blue};
`;
