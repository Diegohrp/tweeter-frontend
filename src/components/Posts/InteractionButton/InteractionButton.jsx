import React from 'react';
import {Button} from './InteractionButton.styles';

const InteractionButton = ({Icon, text}) => {
  return (
    <Button>
      <Icon />
      <span>{text}</span>
    </Button>
  );
};

export {InteractionButton};
