import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import './App.css'
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  render() { 
    return (
      <div className="App">
        <div className="App-header">
          <h2>TEKOBOOK</h2>
        </div>
        <p className="App-intro">
          <Route
              exact path='/'
              render={(props) => (
                <BookList
                  {...props}
                  data = {{
                    books: this.state.books,
                  }}
                />
              )}
          />
          <Route
              path='/book/:id'
              component={BookDetail}
          />
        </p>
        <footer>footer</footer>
    </div>
    )
  }
}

export default App;
