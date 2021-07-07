import React, {useState} from 'react'
import Header from '../Home/Header/Header.jsx'
import * as style from './Main.style.jsx'
import Popup from './Popup/Popup.jsx'
import store from '../../redux/store/index'
import { useSelector, useDispatch } from 'react-redux'

export default function Main() {
  const { userName, balance, } = useSelector(state => state.mainReducer)
  console.log(userName, balance,)
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
