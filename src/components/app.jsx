import React from 'react';
import Login from './Login/Login.jsx';
import Header from './Header/Header.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';
import Register from './Register/Register.jsx';
import { GlobalStyle } from '../index.style.jsx';

const App = () => {
  return (
  <div>
    <GlobalStyle />
    {/* <Header />
    <Content />
    <Footer /> */}
    {/* <Login /> */}
    <Register/>
  </div>
  )
}

export default App;