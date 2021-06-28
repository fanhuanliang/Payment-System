import React from 'react';
import * as style from './Header.style.jsx';

export default function Header() {
  return (
    <style.Header>
      <style.Wrapper>
        <style.Container>
          <div>
            <a>Mimic Pay Logo</a>
          </div>
          <style.rightSide>
            <style.Button>Log In</style.Button>
            <style.Button>Sign Up</style.Button>
          </style.rightSide>
        </style.Container>
      </style.Wrapper>
    </style.Header>
  )
}
