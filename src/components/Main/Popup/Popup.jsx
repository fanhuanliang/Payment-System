import React from 'react'
import User from './Users/Users.jsx'
import * as style from './Popup.style.jsx'

export default function Popup({ open, onClose }) {
  if (!open) return null
  return (
    <>
      <style.BottomLayer>
        <style.PopupModal>
      <button onClick={onClose}>Close Modal</button>
      <input placeholder='$0'></input>
      <div>Transfer to </div>
      <div>Add Recipients</div>
      <input placeholder='Username, phone, or email'></input>
      <User/>
      </style.PopupModal>
      </style.BottomLayer>
    </>
  )
}
