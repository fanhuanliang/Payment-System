import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  // {}, // preloadedState
  //enhancer
  compose(
    //it's a function(...arguments), return function obtained by composing the given functions from right to left.
    applyMiddleware(thunk), //function, wrap multiple middleware to extend redux with custom functionality.
    //redux-thunk lets the action creators invert control by dispatching functions. They would receive dispatch as an argument and may call it asynchronously.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //function.
  )
);
//Redux DevTools with basic store. 
//createStore(reducer, [preloadedState], [enhancer])
//[preloadedState] (any): The initial state.
//If this is a boolean, it will be used to indicate whether configureStore should automatically enable support for the Redux DevTools browser extension.
export default store;