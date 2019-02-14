import React from 'react';

import BookList from './BookList';

class Books extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BookList 
                    books={this.props.books} 
                    deleteBook={this.props.deleteBook} 
                />
            </div>
        );
    }
}

export default Books;