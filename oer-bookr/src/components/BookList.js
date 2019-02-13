import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';
import SimpleModalWrapped from './DeleteModal';

function BookList(props) {
    // let books = [];
    // if (props.filteredCards.length > 0) {
    //     books = props.filteredCards
    // } else {
    //     books = props.books
    // }
    return (
        <div className='bookCardContainer'>
            {props.books.map((book) => {
                return (
                    <NavLink to={`/books/${book.id}`} className='bookCard' key={book.id}>
                        <h2>{book.subject}</h2>
                        <img src={book.image} alt='book-image' />
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                        <i onClick={e => props.deleteBook(e, book.id)} class="far fa-trash-alt"></i>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default BookList;