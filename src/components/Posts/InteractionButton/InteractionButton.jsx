import React from 'react';
import {Button} from './InteractionButton.styles';

const InteractionButton = ({Icon, text, onClick, disabled}) => {
  return (
    <Button interaction={text} onClick={onClick} disabled={disabled}>
      <Icon />
      <span>{text}</span>
    </Button>
  );
};

export {InteractionButton};
