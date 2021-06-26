import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

const color = {
  light_blue: 'rgb(163, 205, 217)',
  dark_blue: 'rgb(80, 106, 212)',
  border_gray: 'rgb(203, 207, 209)',
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-size: 62.25%;
    font-family: sans-serif;
  }
`

export {
  color,
  GlobalStyle,
}
