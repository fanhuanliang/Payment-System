import React from 'react'
import store from '../../../../redux/store/index'
import User from './User/User.jsx'
import * as style from './Users.style.jsx'

export default function Users() {
  const users = store.getState().defaultState;
  // console.log(users)
  return (
    <style.Wrapper>
      <style.Title>Add Recipients</style.Title>
      <style.Input placeholder='Username, phone, or email'/>
      <style.SearchButton>Search</style.SearchButton>
      {users.length === 0 ? null : users.map(user => <User key={user.id} user={user} />)}
    </style.Wrapper>
  )
}

