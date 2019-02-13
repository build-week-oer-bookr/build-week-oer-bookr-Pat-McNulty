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

  // handleChanges = (e) => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

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

  // searchFilter = e => {
  //   e.preventDefault();
  //   const filteredCards = this.state.books.filter( book => {
  //     if (book.subject.includes(this.state.searchInput)) {
  //       return book;
  //     }
  //     return null;
  //   });
  //   this.setState({
  //     filteredCards
  //   })
  // }

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
              // searchInput={this.state.searchInput}
              // searchFilter={this.searchFilter}
              // handleChanges={this.handleChanges}
              // filteredCards={this.state.filteredCards}
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
