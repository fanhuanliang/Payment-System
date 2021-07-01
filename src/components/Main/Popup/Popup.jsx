import React from 'react'
import Users from './Users/Users.jsx'
import * as style from './Popup.style.jsx'

export default function Popup({ open, onClose }) {
  if (!open) return null
  return (
    <>
      <style.BottomLayer>
        <style.PopupModal>
          <div>
            <style.Button onClick={onClose}>X</style.Button>
          </div>
          <style.Form>
            <style.Input placeholder='$0.00'></style.Input>
            <span>Transfer to <span></span></span>
            <style.ConfirmButton>Confirm</style.ConfirmButton>
          </style.Form>
          <Users />
        </style.PopupModal>
      </style.BottomLayer>
    </>
  )
}
