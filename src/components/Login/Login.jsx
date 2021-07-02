import React from 'react'
import * as style from './Login.style.jsx'
import { Link } from 'react-router-dom'

export default function Login() {
  const linkStyle = {
    backgroundColor: 'rgb(163, 205, 217)',
    border: '0px'
  };
  return (
    <style.TopLayer>
      <style.Wrapper>
        <style.container>
          <style.Form>
            <div><h1><Link to='/'>Mimic Pay</Link></h1></div>
            {/* <div>!!!Some of your info isn't correct. Please try again.</div> */}
            <input type="text" placeholder="Email or user name or mobile number" />
            <input type="password" placeholder="Password"></input>
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
