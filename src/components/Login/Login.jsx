import React from 'react'

export default function Login() {
  return (
    <div>
      <form>
        <h1>Power Pay</h1>
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
    </div>
  )
}
