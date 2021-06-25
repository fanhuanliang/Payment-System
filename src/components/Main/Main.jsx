import React from 'react'
import Header from '../Header/Header.jsx'

export default function Main() {
  return (
    <div>
      <Header />
      <div>
        <div>Welcome, User</div>
        <div>Balance</div>
        <div>
          <div>
            <span>$0.00</span>
            <span>Available</span>
          </div>
          <button>Transfer Money To</button>
        </div>
        <Friends />
      </div>
    </div>
  )
}
