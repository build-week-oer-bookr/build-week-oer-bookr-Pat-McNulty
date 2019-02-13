import React from 'react';
import axios from 'axios';

import ReviewSection from './ReviewSection';

class SingleBook extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            reviews: [],
            singleReview: {
               review: 'Review',
               reviewer: 'Pat',
               rating: 1,
               book_id: null
            }
        }
    }

    componentDidMount() {
        this.getReviews();
        let singleReview = {...this.state.singleReview}
        singleReview.book_id = Number(this.props.match.params.id);
        this.setState({singleReview})
    }


    handleChanges = e => {
        this.setState({ [e.target.name]: {...this.state[e.target.name], value: e.target.value},});
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

    addReview = (e) => {
        e.preventDefault();
        const endpoint =
          `https://oer-bookr-api.herokuapp.com/reviews`;
        axios
          .post(endpoint, this.state.singleReview)
          .then(res => {
            console.log(res);
            this.getReviews();
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
                        <div key={review.id}>
                            <p>{review.rating}</p>
                            <p>{review.review}</p>
                            <p>{review.reviewer}</p>
                        </div>
                    )
                })}
                <form>
                    <input
                        type='text'
                        placeholder='Add a review'
                        value={this.state.review}
                        name='review'
                        onChange={this.handleChanges}
                    />
                </form>
                <button onClick={this.addReview}>Add Review</button>
            </div>
         );
    }
}

export default SingleBook;