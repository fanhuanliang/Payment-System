import React from 'react';
import * as style from './Register.style.jsx';

export default function Register() {
  return (
    <style.Layer>
      <style.Container>
        <style.Header>
          <h1><a>Sign up for Mimic Pay</a></h1>
        </style.Header>
        {/* <div>!!!Some of your info isn't correct. Please try again.</div> */}
        <style.Form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm" />
          <style.Button>Register</style.Button>
          <style.LogInButton>Log In Instead</style.LogInButton>
        </style.Form>
      </style.Container>
    </style.Layer>
  )
}
