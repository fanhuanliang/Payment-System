import dummyData from '../../../DummyData'
import * as type from '../actions/actionTypes'

const initialState = {
  data: [...dummyData],
  user: "",
  loginPassword: "",
  userName: "",
  email: "",
  regPassword: "",
  regConfirmPassword: "",
  errMessage: ''
};
export default (state = initialState, action) => {
  // console.log(action.payload) 
  switch (action.type) {
    case type.HANDLE_INPUT_VALUE:
      return { ...state, ...action.payload };
    case type.CLEAN_UP_STATE:
      return initialState;
    case type.REGISTER_ERROR_HANDLER:
      return { ...state, ...action.payload};
    default:
      return state;
  }
};
