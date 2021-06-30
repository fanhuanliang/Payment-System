import React, {useState} from 'react'
import Header from '../Home/Header/Header.jsx'
import * as style from './Main.style.jsx'
import Popup from './Popup/Popup.jsx'

export default function Main() {
  const logOut = true
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Header logOut={logOut}/>
      <style.Container>
        <style.Box>
          <style.Title>Welcome, User</style.Title>
          <style.Heading>$0.00</style.Heading>
          <style.Paragraph>Balance available</style.Paragraph>
          <style.Button onClick={() => setIsOpen(true)} >Transfer Money</style.Button>
        </style.Box>
      </style.Container>
      <Popup open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
}
