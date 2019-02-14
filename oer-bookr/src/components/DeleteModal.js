import React, { Component } from 'react';

import './DeleteModal.css';

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Are you sure you want to delete this book?</p>
          <button onClick={(e) => this.props.deleteBook(e, this.props.bookId)}>Yes</button>
        </Modal>
        <i onClick={this.showModal} class="far fa-trash-alt"></i>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={handleClose}>No</button>
      </section>
    </div>
  );
};

export default DeleteModal;

{/* <i onClick={e => props.deleteBook(e, book.id)} class="far fa-trash-alt"></i> */}