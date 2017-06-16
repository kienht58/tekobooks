import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import PouchDB from 'pouchdb'

import './App.css'
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'

var db

class App extends Component {
  constructor(props) {
    super(props)
    db = new PouchDB('books')
    PouchDB.sync('books', 'http://localhost:5984/books', {
      live: true,
      retry: true
    })
    this.state = {
      books: []
    }
  }

  async componentDidMount() {
    var result
    while(!(result && result.rows && result.rows.length)) {
      console.log('still loading list')
      result = await db.allDocs({include_docs: true})
      await Promise.all(result.rows.map(row => {
        return row.doc
      })).then(allBooks => {
        this.setState({books: allBooks})
      })
    }
  }

  render() { 
    return (
      <div className="App">
        <div className="App-header">
          <h2>TEKOBOOK</h2>
        </div>
        <div className="App-content">
          <button className="btn btn-success">TANH</button>
          <Route
              exact path='/'
              render={(props) => (
                <BookList
                  {...props}
                  books = {this.state.books}
                />
              )}
          />
          <Route
              path='/book/:id'
              render={(props) => (
                <BookDetail
                  {...props}
                  db = {db}
                  books = {this.state.books}
                />
              )}
          />
        </div>
      </div>
    )
  }
}

export default App;
