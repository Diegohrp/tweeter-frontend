import React from 'react';
import {StyledMessage} from './RequestMessage.styles';
import {IoMdClose} from 'react-icons/io';
function RequestMessage({message, closeModal, type, Icon}) {
  return (
    <StyledMessage type={type}>
      <button onClick={closeModal}>
        <IoMdClose />
      </button>
      <Icon />
      <p>{message}</p>
    </StyledMessage>
  );
}

export {RequestMessage};
