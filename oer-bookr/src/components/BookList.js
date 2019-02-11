import React from 'react';

import '../App.css';

function BookList(props) {
    return (
        <div className='bookCardContainer'>
            {props.books.map((book, index) => {
                return (
                    <div className='bookCard' key={index}>
                        <h2>{book.subject}</h2>
                        <img src={book.image} alt='book-image' />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default BookList;