import React from 'react';
import * as style from './Register.style.jsx';
import { Link } from 'react-router-dom'
import withAuth from '../HOC/withAuth'

const Register = (props) => {

  const { userName, email, regPassword, regConfirmPassword } = props.formReducer
  const { msg, id } = props.errorReducer
  const { handleChange, removeErrors, handleRegisterSubmit } = props

  return (
    <style.Layer>
      <style.Container>
        <style.Header>
          <Link to='/'><style.H1>Sign up</style.H1></Link>
        </style.Header>
        {id === 'REGISTER_FAIL' ? <div onMouseLeave={removeErrors}>{msg.msg}</div> : <div style={{ visibility: 'hidden' }}>No err</div>}
        <style.Form onSubmit={handleRegisterSubmit}>
          <input type="text" name='userName' placeholder="Username" value={userName} onChange={handleChange} />
          <input type="email" name='email' placeholder="Email" value={email} onChange={handleChange} />
          <input type="password" name='regPassword' placeholder="Password" value={regPassword} onChange={handleChange} />
          <input type="password" name='regConfirmPassword' placeholder="Confirm" value={regConfirmPassword} onChange={handleChange} />
          <style.Button >Register</style.Button>
          <Link to='login'><style.Button>Log In Instead</style.Button></Link>
        </style.Form>
      </style.Container>
    </style.Layer>
  )
}


export default withAuth(Register);