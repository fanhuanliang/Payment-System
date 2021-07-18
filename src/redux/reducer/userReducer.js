// import dummyData from '../../../DummyData'
import * as type from "../actions/actionTypes";

const initialState = {
  user: "", // login component user input
  loginPassword: "",
  userName: "",
  email: "",
  regPassword: "",
  regConfirmPassword: "",
  searchInput: "",
  transferAmount: "",
  receiver: "",
  searchResult: "",
};
export default (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case type.HANDLE_INPUT_VALUE:
      return { ...state, ...action.payload };
    case type.CLEAN_UP_STATE:
      return initialState;
    case type.SEARCH_USER:
      return { ...state, searchResult: action.payload.userName };
    case type.SEARCH_USER_FAIL:
      return { ...state };
    case type.ADD_RECEIVER:
      return { ...state, receiver: state.searchResult, searchInput: "" };
    default:
      return state;
  }
};
