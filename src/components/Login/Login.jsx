import React from 'react'
import * as style from './Login.style.jsx'
// import {Wrapper} from './Login.style.jsx'

export default function Login() {
  return (
    <style.Wrapper>
      <style.container>
      <form>
        <h1>Mimic Pay</h1>
        <div>!!!Some of your info isn't correct. Please try again.</div>
        <input type="text" placeholder="Email or user name or mobile number" />
        <input type="password" placeholder="Password" />
        <input type="button" value="Log In"/>
      </form>
      <div>
        <div>
          <span>or</span>
        </div>
        <button>
          Sign Up
        </button>
      </div>
        </style.container>
    </style.Wrapper>
  )
}
