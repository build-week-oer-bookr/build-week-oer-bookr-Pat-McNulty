import React from 'react';
import axios from 'axios';

import ReviewSection from './ReviewSection';

class SingleBook extends React.Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        this.getReviews();
    }

    getReviews = () => {
        const endpoint =
          'https://oer-bookr-api.herokuapp.com/reviews';
        axios
          .get(endpoint, {
            headers: {Authorization: localStorage.getItem('jwt')}
          })
          .then(res => {
            this.setState({
                reviews: res.data
            })
          })
          .catch(err => {
            this.setState({ errorMessage: err.response.data.message });
          });
      }

    render() {
        const book = this.props.books.find(
            book => `${book.id}` === this.props.match.params.id
        );
        console.log('reviews', this.state.reviews);
        const filteredReviews = this.state.reviews.filter(review => review.book_id === book.id);
        console.log(filteredReviews)
        return (
            <div>
                <h2>{book.subject}</h2>
                <img src={book.image} alt='book-image' />
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <h5>{book.publisher}</h5>
                <h6>{book.license}</h6>
                <a href={book.link}>Link to Book</a>
                {filteredReviews.map(review => {
                    return (
                        <div>
                            <p>{review.rating}</p>
                            <p>{review.review}</p>
                            <p>{review.reviewer}</p>
                        </div>
                    )
                })}
                <button>Delete</button>
            </div>
         );
    }
}

export default SingleBook;