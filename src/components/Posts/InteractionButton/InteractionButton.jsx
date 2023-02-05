import React from 'react';
import {Button} from './InteractionButton.styles';

const InteractionButton = ({Icon, text, onClick}) => {
  return (
    <Button onClick={onClick}>
      <Icon />
      <span>{text}</span>
    </Button>
  );
};

export {InteractionButton};
