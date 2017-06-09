import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import localForage from 'localforage'

const store = configureStore()

persistStore(store, {storage: localForage})

ReactDOM.render((
	<Provider store={store}>
	  <Router>
	  	<App />
	  </Router>
	</Provider>
), document.getElementById('root'))