import React from 'react';
import {ErrorLabel} from './ErrorFieldMessage.styles';

function ErrorFieldMessage({message}) {
  return <ErrorLabel>{message}</ErrorLabel>;
}

export {ErrorFieldMessage};
