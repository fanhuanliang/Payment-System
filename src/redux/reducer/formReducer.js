import dummyData from '../../../DummyData'
import * as type from '../actions/actionTypes'

const initialState = {
  data: [...dummyData],
  user: "",
  loginPassword: "",
  userName: "",
  email: "",
  phoneNumber: "",
  regPassword: "",
  regConfirmPassword: "",
};
export default (state = initialState, action) => {
  // console.log(action.payload) 
  switch (action.type) {
    case type.HANDLE_INPUT_VALUE:
      return {...state, ...action.payload}
    case type.CLEAN_UP_STATE:
      return initialState;  
    default:
      return state;
  }
};
