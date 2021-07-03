import React from 'react';
import * as style from './Header.style.jsx';
import { Link } from 'react-router-dom'

export default function Header(props) {
  // console.log(props)
  const { logOut} = props;
  return (
    <style.Header>
      <style.Wrapper>
        <style.Container>
          <div>
            <Link to='/'>Mimic Pay Logo</Link>
          </div>
          <style.rightSide>
            {logOut ? <style.NewLink to='/'>Log Out</style.NewLink> :
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
