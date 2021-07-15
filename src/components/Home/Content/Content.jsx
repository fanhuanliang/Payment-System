import React from 'react'
import * as style from './Content.style.jsx'
import img from '../../../../source/money.jpeg'//local import jpeg file by installing file-loader in webpack.

export default function Content() {
  return (
    <div>
      <style.Wrapper>
        <style.Container>
          <style.LeftSide>
          <style.H1>Online payments</style.H1>
            <style.UnOrderList>
              <li>Mimic the transfer feature of venmo</li>
              <li>Money can be transferred to other user</li>
              <li>Maximum $1000 in one transaction</li>
            </style.UnOrderList>
            </style.LeftSide>
          <img src={img} alt='Money transfer' />
        </style.Container>
      </style.Wrapper>
    </div>
  )
}
