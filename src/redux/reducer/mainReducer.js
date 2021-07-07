import * as type from "../actions/actionTypes";

const initialState = {
  data: [],
  userName: "test",
  balance:0,
  searchInput: '',
  transferAmount: undefined,
  receiver: 'receiver',
  searchResult: 'result',
};

export default (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case type.HANDLE_INPUT_VALUE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};