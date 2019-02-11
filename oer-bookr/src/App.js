import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Books from './components/Books';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: ''
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
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

  render() {
    return (
      <div className="App">
        <Route 
          path='/login'
          render={props => (
            <Login
              {...props}
              handleChanges={this.handleChanges}
            />
          )}  
        />
        <Route 
          path='/register'
          render={props => (
            <Register
              {...props}
              handleChanges={this.handleChanges}
            />
          )}
        />
        <Route 
          path='/books'
          render={props => (
            <Books
              {...props}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
