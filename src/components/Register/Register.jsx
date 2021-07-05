import React from 'react';
import * as style from './Register.style.jsx';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { handleInputValue, handleInitState, registerSubmitHandler } from '../../redux/actions/actionCreators'

export default function Register() {
  const { userName, email, phoneNumber, regPassword, regConfirmPassword, errMessage } = useSelector(state => state.formReducer)
  // console.log('userName', userName)
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
        
        const handleSubmit = (event) => {
          event.preventDefault();
          const password = regConfirmPassword
    const registerData = { userName, email, phoneNumber, password }
    console.log('registerData', registerData)
    dispatch(
      registerSubmitHandler(registerData)
    )
  }
  
  return (
    <style.Layer>
      <style.Container>
        <style.Header>
          <h1><Link to='/'>Sign up for Mimic Pay</Link></h1>
        </style.Header>
        {errMessage ? <div>{errMessage}</div> : null}
        <style.Form onSubmit={handleSubmit}>
          <input type="text" name='userName' placeholder="Username" value={userName} onChange={handleChange} />
          <input type="email" name='email' placeholder="Email" value={email} onChange={handleChange} />
          <input type="text" name='phoneNumber' placeholder="Phone number" value={phoneNumber} onChange={handleChange} />
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
