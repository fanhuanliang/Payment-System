import React from 'react'
import store from '../../../../redux/store/index'
import * as style from './Users.style.jsx'
import { useSelector, useDispatch } from 'react-redux'

export default function Users() {
  const { searchInput, searchResult} = useSelector(state => state.mainReducer)

  return (
    <style.Wrapper>
      <style.Title>Add Recipients</style.Title>
      <style.Input placeholder='Username or email' value={searchInput} onChange={()=>{}}/>
      <style.SearchButton>Search</style.SearchButton>
      {searchResult.length === 0 ? null : <button>{searchResult}</button>}
    </style.Wrapper>
  )
}

