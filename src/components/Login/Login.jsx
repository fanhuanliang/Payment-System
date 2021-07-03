import React from 'react'
import * as style from './Login.style.jsx'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { handleInputValue } from '../../redux/action/action.creator'

export default function Login() {
  const inputValue = useSelector(state => state.login.input)
  const password = useSelector(state => state.login.password)
  const dispatch = useDispatch()

  const linkStyle = {
    backgroundColor: 'rgb(163, 205, 217)',
    border: '0px'
  };

  const handleChange = (event) => {
    dispatch(
      handleInputValue(
        event.target.name,
        event.target.value
      )
    );
  }

  return (
    <style.TopLayer>
      <style.Wrapper>
        <style.container>
          <style.Form>
            <div><h1><Link to='/'>Mimic Pay</Link></h1></div>
            {/* <div>!!!Some of your info isn't correct. Please try again.</div> */}
            <input type="text" value={inputValue} name='user' placeholder="Email or user name or mobile number" onChange={handleChange}/>
            <input type="password" value={password} name='password' placeholder="Password" onChange={handleChange}></input>
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
