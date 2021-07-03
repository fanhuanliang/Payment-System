import React from 'react';
import Login from './Login/Login.jsx';
import Header from './Home/Header/Header.jsx';
import Content from './Home/Content/Content.jsx';
import Footer from './Home/Footer/Footer.jsx';
import Register from './Register/Register.jsx';
import Main from './Main/Main.jsx';
import { GlobalStyle } from '../index.style.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  // console.log(window.__REDUX_DEVTOOLS_EXTENSION__() )
  return (
    <Router>
      <>
      <GlobalStyle />
        <Switch>
          <Route exact path='/'>
        <Header />
            <Content />
            <Footer />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/main'>
            <Main />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App;