import React from 'react';
import * as style from './Register.style.jsx';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { handleInputValue, handleInitState, registerSubmitHandler } from '../../redux/actions/actionCreators'
import { clearErrors } from '../../redux/actions/errorActions'

export default function Register() {
  const { userName, email, regPassword, regConfirmPassword } = useSelector(state => state.formReducer)
  const { msg, id } = useSelector(state => state.errorReducer)
  const { isAuthenticated } = useSelector(state => state.authReducer)

  // console.log('userName', msg, id)
  let history = useHistory()

  const registerAuth = () => {
    if (isAuthenticated) history.push("/main")
  }

  React.useEffect(() =>
    registerAuth(), [isAuthenticated]
  )

  const dispatch = useDispatch()
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
    )
  }

  const removeErrors = () => {
    dispatch(
      clearErrors()
    )
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const password = regConfirmPassword
    dispatch(
      registerSubmitHandler({ userName, email, password })
    )
  }

  return (
    <style.Layer>
      <style.Container>
        <style.Header>
          <h1><Link to='/'>Sign up for Mimic Pay</Link></h1>
        </style.Header>
        {id === 'REGISTER_FAIL' ? <div onMouseLeave={removeErrors}>{msg.msg}</div> : <div style={{ visibility: 'hidden' }}>No err</div>}
        <style.Form onSubmit={handleSubmit}>
          <input type="text" name='userName' placeholder="Username" value={userName} onChange={handleChange} />
          <input type="email" name='email' placeholder="Email" value={email} onChange={handleChange} />
          <input type="password" name='regPassword' placeholder="Password" value={regPassword} onChange={handleChange} />
          <input type="password" name='regConfirmPassword' placeholder="Confirm" value={regConfirmPassword} onChange={handleChange} />
          <style.Button >Register</style.Button>
          {/* <style.LogInButton>Log In Instead</style.LogInButton> */}
          <Link to='login'><style.LogInButton>Log In Instead</style.LogInButton></Link>
        </style.Form>
      </style.Container>
    </style.Layer>
  )
}
