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
                    handleClose={this.props.handleClose}
                    handleOpen={this.props.handleOpen}
                />
            </div>
        );
    }
}

export default Books;