import React from 'react';
import axios from 'axios';

import ReviewSection from './ReviewSection';

class SingleBook extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            reviews: [],
            reviewData: '',
            reviewer: '',
            id: '',
            book_id: '',
            rating: ''
        }
    }

    componentDidMount() {
        this.getReviews();
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
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

    addReview = e => {
        e.preventDefault();
        this.setState({
            reviews: [...this.state.reviews,
                {
                reviewer: 'username',
                review: this.state.reviewData,
                }
            ],
            reviewData: ''
        })
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
                        <div key={review.id}>
                            <p>{review.rating}</p>
                            <p>{review.review}</p>
                            <p>{review.reviewer}</p>
                        </div>
                    )
                })}
                <form>
                    <input
                        type='review'
                        placeholder='Add a review'
                        value={this.state.reviewData}
                        name='reviewData'
                        onChange={this.handleChanges}
                    />
                </form>
                <button onClick={this.addReview}>Add Review</button>
                <button>Delete</button>
            </div>
         );
    }
}

export default SingleBook;