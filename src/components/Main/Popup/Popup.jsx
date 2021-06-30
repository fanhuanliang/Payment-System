import React from 'react'
import User from './Users/Users.jsx'
import * as style from './Popup.style.jsx'

export default function Popup({ open, onClose }) {
  if (!open) return null
  return (
    <>
      <style.BottomLayer>
        <style.PopupModal>
            <button onClick={onClose}>X</button>
          <form>
            <input placeholder='$0'></input>
          <div>Transfer to </div>
          <button>Confirm</button>
          </form>
          <div>Add Recipients</div>
          <input placeholder='Username, phone, or email'></input>
          <button>Search</button>
          <User />
        </style.PopupModal>
      </style.BottomLayer>
    </>
  )
}
