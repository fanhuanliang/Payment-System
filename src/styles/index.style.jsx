import { createGlobalStyle } from "styled-components";
import { reset } from "./reset.jsx";

export const GlobalStyle = createGlobalStyle`
${reset}
  // *,
  // *::before,
  // *::after {
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // }
  // body{
  //   font-size: 62.25%;
  //   font-family: sans-serif;
  // }
`;
