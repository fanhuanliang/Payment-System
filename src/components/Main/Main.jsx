import React, {useState} from 'react'
import Header from '../Home/Header/Header.jsx'
import * as style from './Main.style.jsx'
import Popup from './Popup/Popup.jsx'
import store from '../../redux/store/index'

export default function Main() {
  console.log(store)
  // console.log(store.getState())
  const userOne = store.getState().login.defaultState[0]
  const logOut = true
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Header logOut={logOut}/>
      <style.Container>
        <style.Box>
          <style.Title>Welcome, {userOne.userName}</style.Title>
          <style.Heading>${userOne.balance.toFixed(2)}</style.Heading>
          <style.Paragraph>Balance available</style.Paragraph>
          <style.Button onClick={() => setIsOpen(true)} >Transfer Money</style.Button>
        </style.Box>
      </style.Container>
      <Popup open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
}
