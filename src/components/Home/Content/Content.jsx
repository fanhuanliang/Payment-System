import React from 'react'
import * as style from './Content.style.jsx'
import img from '../../../../source/money.jpeg'//local import jpeg file by installing file-loader in webpack.

export default function Content() {
  return (
    <div>
      <style.Wrapper>
        <style.Container>
          <style.LeftSide>
          <h1>Online payments</h1>
            <style.UnOrderList>
              <li>Mimic the transfer feature of venmo</li>
              <li>Money only can be transferred between friends</li>
              <li>Maximum $1000 in one transaction</li>
            </style.UnOrderList>
            </style.LeftSide>
          <img src={img} alt='Money transfer' />
        </style.Container>
      </style.Wrapper>
    </div>
  )
}
