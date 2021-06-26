import React from 'react'
import * as style from './Login.style.jsx'
// import {Wrapper} from './Login.style.jsx'

export default function Login() {
  return (
    <style.TopLayer>
      <style.Wrapper>
        <style.container>
          <style.Form>
            <div><h1>Mimic Pay</h1></div>
            {/* <div>!!!Some of your info isn't correct. Please try again.</div> */}
            <input type="text" placeholder="Email or user name or mobile number" />
            <input type="password" placeholder="Password"></input>
            <style.Button>Log In</style.Button>
        </style.Form>
          <style.BottomContainer>
            <style.Middle>
              <span>or</span>
            </style.Middle>
            <style.Button>
              Sign Up
            </style.Button>
          </style.BottomContainer>
        </style.container>
      </style.Wrapper>
    </style.TopLayer>
  )
}
