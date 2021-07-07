import React from 'react';
import Login from './Login/Login.jsx';
import Home from './Home/Home.jsx';
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
          {true ?  <Home />:<Main />}
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