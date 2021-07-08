import React, { useEffect } from 'react';
import Login from './Login/Login.jsx';
import Home from './Home/Home.jsx';
import Register from './Register/Register.jsx';
import Main from './Main/Main.jsx';
import { GlobalStyle } from '../index.style.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../redux/actions/actionCreators'

const App = () => {
  // console.log(window.__REDUX_DEVTOOLS_EXTENSION__() )
  const { user, isAuthenticated } = useSelector(state => state.authReducer)
  console.log(user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])
  return (
    <Router>
      <>
      <GlobalStyle />
        <Switch>
          <Route exact path='/'>
            {!isAuthenticated ? <Home /> : <Main user={user}/>}
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