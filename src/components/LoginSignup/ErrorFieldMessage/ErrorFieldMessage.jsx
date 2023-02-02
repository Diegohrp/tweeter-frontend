import React from 'react';
import {ErrorLabel} from './ErrorFieldMessage.styles';

const ErrorFieldMessage = ({message}) => {
  return <ErrorLabel>{message}</ErrorLabel>;
};

export {ErrorFieldMessage};
