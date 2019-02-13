import React from 'react';

import BookList from './BookList';

class Books extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            {/* //     <form onSubmit={ e => this.props.searchFilter(e)}>
            //         <input 
            //             type='search bar'
            //             placeholder='Find a subject'
            //             name='searchInput'
            //             value={this.props.searchInput}
            //             onChange={this.props.handleChanges}
            //         />
            //     </form> */}
                <BookList 
                    books={this.props.books} 
                    deleteBook={this.props.deleteBook} 
                    // filteredCards={this.props.filteredCards}
                />
            </div>
        );
    }
}

export default Books;