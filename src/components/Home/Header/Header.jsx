import React from 'react';
import * as style from './Header.style.jsx';

export default function Header(props) {
  // console.log(props)
  const { logOut } = props;
  return (
    <style.Header>
      <style.Wrapper>
        <style.Container>
          <div>
            <a>Mimic Pay Logo</a>
          </div>
          <style.rightSide>
            {logOut ? <style.Button>Log Out</style.Button> :
              <>
                <style.Button>Log In</style.Button>
                <style.Button>Sign Up</style.Button>
              </>
            }
          </style.rightSide>
        </style.Container>
      </style.Wrapper>
    </style.Header>
  )
}
