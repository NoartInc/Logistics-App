import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Router store={store}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)