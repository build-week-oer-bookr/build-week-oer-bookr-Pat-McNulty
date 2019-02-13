import React from 'react';

import BookList from './BookList';
import NavBar from './NavBar';

class Books extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='bookListCont'>
                <NavBar />
                <BookList books={this.props.books} deleteBook={this.props.deleteBook} />
            </div>
        );
    }
}

export default Books;