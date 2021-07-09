import React, {useState} from 'react'
import Header from '../Home/Header/Header.jsx'
import * as style from './Main.style.jsx'
import Popup from './Popup/Popup.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleInitState } from '../../redux/actions/actionCreators'

export default function Main() {
  const { token, user, balance } = useSelector(state => state.authReducer)
  const dispatch = useDispatch();

  if (token === null) return <Redirect to='/login'/>

  const logOut = true
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true);
    dispatch(
      handleInitState()
    )
  }

  return (
    <div>
      <Header logOut={logOut}/>
      <style.Container>
        <style.Box>
          <style.Title>Welcome, <span>{user}</span></style.Title>
          <style.Heading>${balance.toFixed(2)}</style.Heading>
          <style.Paragraph>Balance available</style.Paragraph>
          <style.Button onClick={openModal} >Transfer Money</style.Button>
        </style.Box>
      </style.Container>
      <Popup open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
}
