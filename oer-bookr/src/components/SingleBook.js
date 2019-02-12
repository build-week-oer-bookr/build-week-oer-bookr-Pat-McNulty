import React from 'react';

function SingleBook(props) {
    console.log(props);
    const book = props.books.find(
        book => `${book.id}` === props.match.params.id
    );

    return (
        <div>
            <h2>{book.subject}</h2>
            <img src={book.image} alt='book-image' />
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <h5>{book.publisher}</h5>
            <h6>{book.license}</h6>
            <a href={book.link}>Link to Book</a>
        </div>
    );
}

export default SingleBook;