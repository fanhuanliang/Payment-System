import React from 'react';
import * as style from './Register.style.jsx';
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <style.Layer>
      <style.Container>
        <style.Header>
          <h1><Link to='/'>Sign up for Mimic Pay</Link></h1>
        </style.Header>
        {/* <div>!!!Some of your info isn't correct. Please try again.</div> */}
        <style.Form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm" />
          <style.Button>Register</style.Button>
          {/* <style.LogInButton>Log In Instead</style.LogInButton> */}
            <Link to='login'><style.LogInButton>Log In Instead</style.LogInButton></Link>
        </style.Form>
      </style.Container>
    </style.Layer>
  )
}
