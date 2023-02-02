import React from 'react';
import ReactDOM from 'react-dom';
import {ModalBg} from './Modal.styles';

const Modal = ({children, isOpen}) => {
  if (isOpen) {
    return ReactDOM.createPortal(
      <ModalBg>{children}</ModalBg>,
      document.getElementById('portal')
    );
  }
  return null;
};

export {Modal};
