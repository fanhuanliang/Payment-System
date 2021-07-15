// import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import { reset } from './reset.jsx'

// console.log(body)
export const GlobalStyle = createGlobalStyle`
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
  ${reset}
`

