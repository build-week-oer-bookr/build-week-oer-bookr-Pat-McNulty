import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../App.css';

function BookList(props) {
    return (
        <div className='bookCardContainer'>
            {props.books.map((book) => {
                return (
                    <NavLink to={`/books/${book.id}`} className='bookCard' key={book.id}>
                        <h2>{book.subject}</h2>
                        <img src={book.image} alt='book-image' />
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default BookList;