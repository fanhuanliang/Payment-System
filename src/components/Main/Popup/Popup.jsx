import React from 'react'
import Users from './Users/Users.jsx'
import * as style from './Popup.style.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { handleInputValue, handleTransfer } from '../../../redux/actions/actionCreators'

export default function Popup({ open, onClose }) {
  if (!open) return null
  const { receiver, transferAmount} = useSelector(state => state.formReducer)
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(
      handleInputValue(
        event.target.name,
        event.target.value
      )
    )
  }
  const transferFund = (event) => {
    event.preventDefault();
    dispatch(
      handleTransfer({
        userName: receiver,
        amount: transferAmount
      })
    )
    alert('Transfer success')
    onClose()
  }

  return (
    <>
      <style.BottomLayer>
        <style.PopupModal>
          <div>
            <style.Button onClick={onClose}>X</style.Button>
          </div>
          <style.Form onSubmit={transferFund}>
            <style.Input name='transferAmount' placeholder='$0.00' value={transferAmount} onChange={handleChange}></style.Input>
            <span>Transfer to <span>{receiver}</span></span>
            <style.ConfirmButton>Confirm</style.ConfirmButton>
          </style.Form>
          <Users />
        </style.PopupModal>
      </style.BottomLayer>
    </>
  )
}
