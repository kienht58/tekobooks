import React from 'react';
import ReactDOM from 'react-dom'
import App from './containers/App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render((
	<Provider store={store}>
	  <Router>
	  	<App />
	  </Router>
	</Provider>
), document.getElementById('root'))