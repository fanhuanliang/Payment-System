import React from 'react'
import * as style from './Users.style.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { handleInputValue, addToReceiver, searchRecipient } from '../../../../redux/actions/actionCreators'
import { clearErrors } from '../../../../redux/actions/errorActions'

export default function Users() {
  const { searchInput, searchResult } = useSelector(state => state.formReducer)
  const { msg, id } = useSelector(state => state.errorReducer)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      handleInputValue(
        event.target.name,
        event.target.value
      )
    )
  }
  const removeErrors = () => {
    dispatch(
      clearErrors()
    )
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      searchRecipient(searchInput)
    )
  }
  const addRecipient = ()=> {
    dispatch(
      addToReceiver()
    )
  }
  return (
    <style.Wrapper>
      <style.Title>Add Recipients</style.Title>
      <form onSubmit={handleSubmit}>
        {id === 'SEARCH_USER_FAIL' ? <div onMouseLeave={removeErrors}>{msg.msg}</div> : <div style={{ visibility: 'hidden' }}>No err</div>}
        <style.Input placeholder='Username or email' name='searchInput' value={searchInput} onChange={handleChange}/>
        <style.SearchButton>Search</style.SearchButton>
      </form>
      {searchResult.length === 0 ? null : <button onClick={addRecipient}>{searchResult}</button>}
    </style.Wrapper>
  )
}

