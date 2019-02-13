import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Books from './components/Books';
import SingleBook from './components/SingleBook';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchInput: '',
      filteredCards: []
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    const endpoint =
      'https://oer-bookr-api.herokuapp.com/books';
    axios
      .get(endpoint, {
        headers: {Authorization: localStorage.getItem('jwt')}
      })
      .then(res => {
        console.log(res.data);
        this.setState({
            books: res.data
        })
      })
      .catch(err => {
        this.setState({ errorMessage: err.response.data.message });
      });
  };

  deleteBook = (e, id) => {
    e.preventDefault();
    const endpoint =
      `https://oer-bookr-api.herokuapp.com/books/${id}`;
    axios
      .delete(endpoint)
      .then(res => {
        console.log(res);
        this.getBooks();
      })
      .catch(err => err.data)
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
        <Route 
          exact
          path='/'
          render={props => (
            <Login
              {...props}
            />
          )}  
        />
        <Route 
          path='/register'
          render={props => (
            <Register
              {...props}
            />
          )}
        />
        <Route
          exact 
          path='/books'
          render={props => (
            <Books
              {...props}
              books={this.state.books}
              deleteBook={this.deleteBook}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
            />
          )}
        />
        <Route 
          exact
          path='/books/:id'
          render={props => (
            <SingleBook
              {...props}
              books={this.state.books}
              reviews={this.state.reviews}
            />
          )}
        />
        </div>
      </div>
    );
  }
}

export default App;
