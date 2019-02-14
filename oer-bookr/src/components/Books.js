import React from 'react';

import BookList from './BookList';

function Books(props) {

    return (
        <div>
            <h2 className='bookHeader'>Books</h2>
            <BookList 
                books={props.books} 
                deleteBook={props.deleteBook} 
            />
        </div>
    );
}

export default Books;