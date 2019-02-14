import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';
import DeleteModal from './DeleteModal';

function BookList(props) {
    return (
        <div className='bookCardContainer'>
            {props.books.map((book) => {
                return (
                    <div className='bookCard' key={book.id}>
                        <h2>{book.subject}</h2>
                        <NavLink to={`/books/${book.id}`}>
                            <img src={book.image} alt='book-image' />
                        </NavLink>
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                        <DeleteModal 
                            deleteBook={props.deleteBook} 
                            bookId={book.id}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default BookList;

{/* <i onClick={e => props.deleteBook(e, book.id)} class="far fa-trash-alt"></i> */}