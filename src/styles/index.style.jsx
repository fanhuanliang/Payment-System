// import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import { reset } from './reset.jsx'

const color = {
  light_blue: 'rgb(163, 205, 217)',
  dark_blue: 'rgb(0,108,182)',
  border_gray: 'rgb(203, 207, 209)',
}
// console.log(body)
const GlobalStyle = createGlobalStyle`
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

export {
  color,
  GlobalStyle,
}
