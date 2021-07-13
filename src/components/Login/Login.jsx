import React from 'react'
import withAuth from '../HOC/withAuth'
import * as style from './Login.style.jsx'
import { Link, } from 'react-router-dom'

const Login = (props) => {

  const { user, loginPassword } = props.formReducer
  const { msg, id } = props.errorReducer
  const { handleChange, handleSubmit, removeErrors, linkStyle} = props
  // console.log(props)
  return (
    <style.TopLayer>
      <style.Wrapper>
        <style.container>
          <style.Form onSubmit={handleSubmit}>
            <div><h1><Link to='/'>Mimic Pay</Link></h1></div>
            {id === 'LOGIN_FAIL' ? <div onMouseLeave={removeErrors}>{msg.msg}</div> : <div style={{ visibility: 'hidden' }}>No err</div>}
            <input type="text" value={user} name='user' placeholder="Email or user name" onChange={handleChange} />
            <input type="password" value={loginPassword} name='loginPassword' placeholder="Password" onChange={handleChange}></input>
            <style.Button >Log In</style.Button>
          </style.Form>
          <style.BottomContainer>
            <style.Middle>
              <span>or</span>
            </style.Middle>
            <Link to='register'><style.Button style={linkStyle}>Sign Up</style.Button></Link>
          </style.BottomContainer>
        </style.container>
      </style.Wrapper>
    </style.TopLayer>
  )
}

// export default withAuth(Login)
export default withAuth(Login)