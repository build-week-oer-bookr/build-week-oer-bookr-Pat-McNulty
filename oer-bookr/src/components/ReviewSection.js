// import React from 'react';

// class ReviewSection extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             reviewArr: [],
//             reviewData: '',
//             username: ''
//         }
//     }

//     handleChanges = e => {
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     render() {
//         const book = this.props.books.map(book => {
//             return book;
//         });
//         return (
//             <div>
//                {this.props.reviews.filter(review => review.book_id === book.id) => {
//                    return (

//                    )
//                }}
//                 <form>
//                     <input 
//                         type='text'
//                         placeholder='Add a review...'
//                         value={this.state.reviewData}
//                         name='reviewData'
//                         onChange={this.handleChanges}
//                     />   
//                 </form> 
//             </div>
//         );
//     }
// }

// export default ReviewSection;