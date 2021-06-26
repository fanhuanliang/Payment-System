import React from 'react';
import Login from './Login/Login.jsx';
import Header from './Header/Header.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx'
import { GlobalStyle } from '../index.style.jsx'

const App = () => {
  return (
  <div>
    <GlobalStyle />
    {/* <Header />
    <Content />
    <Footer /> */}
    <Login />
  </div>
  )
}

export default App;