import React from 'react'
import Users from './Users/Users.jsx'
import * as style from './Popup.style.jsx'
import { useSelector, useDispatch } from 'react-redux';

export default function Popup({ open, onClose }) {
  if (!open) return null
  const { receiver, transferAmount} = useSelector(state => state.mainReducer)
  console.log(receiver, transferAmount,)
  return (
    <>
      <style.BottomLayer>
        <style.PopupModal>
          <div>
            <style.Button onClick={onClose}>X</style.Button>
          </div>
          <style.Form>
            <style.Input placeholder='$0.00' value={transferAmount} ></style.Input>
            <span>Transfer to <span>{receiver}</span></span>
            <style.ConfirmButton>Confirm</style.ConfirmButton>
          </style.Form>
          <Users />
        </style.PopupModal>
      </style.BottomLayer>
    </>
  )
}
