import React from 'react';
import * as style from './Header.style.jsx';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/actionCreators'

export default function Header() {
  const {token} = useSelector(state=>state.authReducer)

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  
  return (
    <style.Header>
      <style.Wrapper>
        <style.Container>
          <div>
            <Link to='/'>Mimic Pay Logo</Link>
          </div>
          <style.rightSide>
            {token !== null ? <style.NewLink to='/' onClick={handleLogout}>Log Out</style.NewLink> :
              <>
                <style.NewLink to='/login'>Log In</style.NewLink>
                <style.NewLink to='/register'>Sign Up</style.NewLink>
              </>
            }
          </style.rightSide>
        </style.Container>
      </style.Wrapper>
    </style.Header>
  )
}
