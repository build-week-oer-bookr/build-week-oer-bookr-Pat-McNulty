import React from 'react';

import BookList from './BookList';

function Books(props) {

    return (
        <div>
            <BookList 
                books={props.books} 
                deleteBook={props.deleteBook} 
            />
        </div>
    );
}

export default Books;