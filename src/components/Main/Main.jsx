import React, {useState} from 'react'
import Header from '../Home/Header/Header.jsx'
import * as style from './Main.style.jsx'
import Popup from './Popup/Popup.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function Main() {
  const { userName, balance, } = useSelector(state => state.mainReducer)
  const { token } = useSelector(state => state.authReducer)

  // console.log(userName, balance,)
  if (token === null) return <Redirect to='/login'/>
  const logOut = true
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Header logOut={logOut}/>
      <style.Container>
        <style.Box>
          <style.Title>Welcome, {userName}</style.Title>
          <style.Heading>${balance.toFixed(2)}</style.Heading>
          <style.Paragraph>Balance available</style.Paragraph>
          <style.Button onClick={() => setIsOpen(true)} >Transfer Money</style.Button>
        </style.Box>
      </style.Container>
      <Popup open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
}
