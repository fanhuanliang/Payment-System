import React from 'react'
import withAuth from '../HOC/withAuth'
import * as style from './Login.style.jsx'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { handleInputValue, handleInitState, loginSubmitHandler } from '../../redux/actions/actionCreators'
import { clearErrors } from '../../redux/actions/errorActions'

const Login = () => {
  const { user, loginPassword } = useSelector(state => state.formReducer)
  const { msg, id } = useSelector(state => state.errorReducer)
  const { token, isAuthenticated } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()
  let history = useHistory()

  // console.log('loginAuth', token, user, history)
  const loginAuth = () =>{
      // history.push("/main");
    if (isAuthenticated) history.push("/main")
  }

  const linkStyle = {
    backgroundColor: 'rgb(163, 205, 217)',
    border: '0px'
  };

  React.useEffect(() => {
    return dispatch(
      handleInitState()
    )
  }, [])

  React.useEffect(()=>
    loginAuth(), [isAuthenticated]
  )

  const handleChange = (event) => {
    dispatch(
      handleInputValue(
        event.target.name,
        event.target.value
      )
    );
  }

  const removeErrors = () => {
    dispatch(
      clearErrors()
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const password = loginPassword
    const account = user
    dispatch(
      loginSubmitHandler({ account, password })
    )
  }

  return (
    <style.TopLayer>
      <style.Wrapper>
        <style.container>
          <style.Form onSubmit={handleSubmit}>
            <div><h1><Link to='/'>Mimic Pay</Link></h1></div>
            {id === 'LOGIN_FAIL' ? <div onMouseLeave={removeErrors}>{msg.msg}</div> : <div style={{ visibility: 'hidden' }}>No err</div>}
            <input type="text" value={user} name='user' placeholder="Email or user name" onChange={handleChange} />
            <input type="password" value={loginPassword} name='loginPassword' placeholder="Password" onChange={handleChange}></input>
            <style.Button >Log In</style.Button>
          </style.Form>
          <style.BottomContainer>
            <style.Middle>
              <span>or</span>
            </style.Middle>
            <Link to='register'><style.Button style={linkStyle}>Sign Up</style.Button></Link>
          </style.BottomContainer>
        </style.container>
      </style.Wrapper>
    </style.TopLayer>
  )
}

export default withAuth(Login)