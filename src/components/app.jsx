import React, { useEffect } from 'react';
import Login from './Login/Login.jsx';
import Home from './Home/Home.jsx';
import Register from './Register/Register.jsx';
import Main from './Main/Main.jsx';
import { GlobalStyle } from '../styles/index.style.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux';
import { loadUser } from '../redux/actions/actionCreators'
import { Loading } from '../styles/Loading.style.jsx'
const App = () => {
  // console.log(window.__REDUX_DEVTOOLS_EXTENSION__() )
  const { isLoading } = useSelector(state=>state.authReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])

  if(isLoading) return <Loading>Loading...</Loading>
  
  return (
    <Router>
      <>
      <GlobalStyle />
        <Switch>
          <Route exact path='/'>
            <Home /> 
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/main'>
            <Main />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App;