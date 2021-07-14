import React from 'react';
import * as style from './Header.style.jsx';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/actionCreators'

export default function Header() {
  const { isAuthenticated } = useSelector(state => state.authReducer)

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  // React.useEffect(() => {
  //   console.log('mounted')
  //   return () => {
  //     console.log('******************* UNMOUNTED');
  //   };
  // }, []);

  return (
    <style.Header>
      <style.Wrapper>
        <style.Container>
          <div>
            <Link to='/'>Mimic Pay Logo</Link>
          </div>
          <style.rightSide>
            {isAuthenticated ?
              <>
                <style.NewLink to='/main' >Account</style.NewLink>
                <style.NewLink to='/login' onClick={handleLogout}>Log Out</style.NewLink>
              </>
              :
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
