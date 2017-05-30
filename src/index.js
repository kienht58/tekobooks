import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';
import BookDetail from './modules/BookDetail';
import BookForm from './modules/BookForm';
import './index.css';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

ReactDOM.render((
  <Router>
  	<div>
		  <Route exact path="/" component={App} />
		  <Route path="/create" component={BookForm} />
		  <Route path="/book/:id" component={BookDetail}/>
		  <Route path="/update/:idx" component={BookForm} />
		</div>
  </Router>
), document.getElementById('root'))