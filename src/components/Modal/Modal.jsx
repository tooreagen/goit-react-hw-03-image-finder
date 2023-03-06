import { Component } from 'react';
import { Overlay, ModalImg } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.props.onModalClose}>
        <ModalImg>
          <img src={this.props.imageURL} alt={this.props.imageTags} />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}
