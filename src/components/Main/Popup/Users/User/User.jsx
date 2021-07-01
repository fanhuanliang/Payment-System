import React from 'react'
import * as style from './User.style.jsx'

export default function User({user}) {
  // console.log(props)
  const {userName} = user
  return (
    <style.NameBar>
      {user.userName}
    </style.NameBar>
  )
}
