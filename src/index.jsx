import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';
import { Provider } from 'react-redux'
import store from './redux/store/index'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)