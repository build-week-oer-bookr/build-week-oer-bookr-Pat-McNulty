import React from 'react';
import axios from 'axios';

import './SingleBook.css';

class SingleBook extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            reviews: [],
            isUpdating: false,
            singleReview: {
               review: '',
               reviewer: '',
               rating: null,
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

    handleReviewChanges = e => {
      e.preventDefault();      
      let singleReview = {...this.state.singleReview}
      singleReview.review = e.target.value
      this.setState({singleReview})
    }

    handleRatingChanges = e => {
      e.preventDefault();      
      let singleReview = {...this.state.singleReview}
      singleReview.rating = e.target.value
      this.setState({singleReview})
    }

    handleReviewerChanges = e => {
      e.preventDefault();      
      let singleReview = {...this.state.singleReview}
      singleReview.reviewer = e.target.value
      this.setState({singleReview})
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

    deleteReview = (e, id) => {
        e.preventDefault();
        const endpoint =
          `https://oer-bookr-api.herokuapp.com/reviews/${id}`;
        axios
          .delete(endpoint)
          .then(res => {
            console.log(res);
            this.getReviews();
          })
          .catch( err => err.data)
    }

    editReview = (e) => {
      e.preventDefault();
      const id = this.props.match.params.review.book_id;
      console.log(id);
      const endpoint =
        `https://oer-bookr-api.herokuapp.com/reviews/${id}`;
      const newReview = {
        review: this.state.singleReview.review,
        reviewer: this.state.singleReview.reviewer,
        rating: this.state.singleReview.rating
      };
      axios
        .put(endpoint, newReview)
        .then(res => {
          console.log(res.data);
          this.getReviews();
          this.setState({
            singleReview:  {
              review: '',
              reviewer: '',
              rating: ''
            }
          })
        })
        .catch(err => console.log(err))
    }

    populateForm = (e, id) => {
      e.preventDefault();
      this.setState({
        singleReview: this.state.reviews.find(review => review.book_id === id),
        isUpdating: true
      });
    }

    render() {
        const book = this.props.books.find(
            book => `${book.id}` === this.props.match.params.id
        );
        const filteredReviews = this.state.reviews.filter(review => review.book_id === book.id);
        return (
            <div className='singleBookCont'>
                <img src={book.image} alt='book' />
                <div className='bookDescription'>
                  <h3>{book.title}</h3>
                  <h4>by {book.author}</h4>
                  <h6>Publisher: {book.publisher}</h6>
                  <h6>License: {book.license}</h6>
                  <div className='bookDescriptionBot'>
                    <h5>Subject: {book.subject}</h5>
                    <a href={book.link}>Get this Book!</a>
                  </div>
                </div>
                <div className='reviewsCont'>
                <h7>Reviews</h7>
                {filteredReviews.map(review => {
                    return (
                        <div className='reviewCont'>
                          <div className='reviewContTop'>
                            <p>User: {review.reviewer}</p>
                            <p>Rating: {review.rating}</p>
                          </div>
                            <p className='review'>{review.review}</p>
                            <div className='reviewContBot'>
                              <button onClick={e => this.populateForm(e, review.book_id)}>
                                Edit Review
                              </button>
                              <i onClick={e => this.deleteReview(e, review.id)} class="far fa-trash-alt"></i>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className='formCont'>
                  <form>
                      <input
                        type='text'
                        placeholder='Add a review'
                        value={this.state.singleReview.review}
                        name='review'
                        onChange={this.handleReviewChanges}
                      />
                      <input
                        type='text'
                        placeholder='Add a rating'
                        value={this.state.singleReview.rating}
                        name='rating'
                        onChange={this.handleRatingChanges}
                      />
                      <input
                        type='text'
                        placeholder='Username'
                        value={this.state.singleReview.reviewer}
                        name='reviewer'
                        onChange={this.handleReviewerChanges}
                      />
                  </form>
                <button onClick={this.addReview}>Add Review</button>
                <button onClick={this.editReview}>Edit Review</button>
                </div>
            </div>
         );
    }
}

export default SingleBook;

