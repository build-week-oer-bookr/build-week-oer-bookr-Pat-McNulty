import React from 'react';

import BookList from './BookList';

class Books extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BookList books={this.props.books} />
        );
    }
}

export default Books;