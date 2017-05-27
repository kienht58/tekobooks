import React, { Component } from 'react';
import '../App.css';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';
import SearchBar from './SearchBar';

class App extends Component {
	render() {
		return (
			<div className="App">
	      <Navigation />
	      <SearchBar />
	      <Content />
	      <Footer />
	    </div>
		);
	}
}

export default App;