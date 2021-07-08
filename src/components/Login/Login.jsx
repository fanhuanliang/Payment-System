import React from 'react'
import * as style from './Login.style.jsx'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { handleInputValue, handleInitState, loginSubmitHandler } from '../../redux/actions/actionCreators'
import { clearErrors } from '../../redux/actions/errorActions'

export default function Login() {
  const { user, loginPassword } = useSelector(state => state.formReducer)
  const { msg, id } = useSelector(state => state.errorReducer)
  const dispatch = useDispatch()

  const linkStyle = {
    backgroundColor: 'rgb(163, 205, 217)',
    border: '0px'
  };

  React.useEffect(() => {
    return dispatch(
      handleInitState()
    )
  }, [])

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
            {id === 'LOGIN_FAIL' ? <div onMouseLeave={removeErrors}>{msg.msg}</div> : <div style={{visibility: 'hidden'}}>No err</div>}
            <input type="text" value={user} name='user' placeholder="Email or user name" onChange={handleChange} />
            <input type="password" value={loginPassword} name='loginPassword' placeholder="Password" onChange={handleChange}></input>
            <style.Button>Log In</style.Button>
          </style.Form>
          <style.BottomContainer>
            <style.Middle>
              <span>or</span>
            </style.Middle>
            {/* <style.Button> */}
            <Link to='register'><style.Button style={linkStyle}>Sign Up</style.Button></Link>
            {/* </style.Button> */}
          </style.BottomContainer>
        </style.container>
      </style.Wrapper>
    </style.TopLayer>
  )
}
