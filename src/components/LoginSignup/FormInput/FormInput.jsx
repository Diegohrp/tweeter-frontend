import React from 'react';
import {InputContainer, StyledInput} from './FormInput.styles';
import {ErrorFieldMessage} from '../ErrorFieldMessage/ErrorFieldMessage';

const FormInput = ({
  Icon,
  type,
  placeholder,
  name,
  value,
  valid,
  onChange,
  errorMsg,
}) => {
  return (
    <InputContainer>
      <StyledInput isValid={valid}>
        <Icon />
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </StyledInput>
      {valid != null && !valid && <ErrorFieldMessage message={errorMsg} />}
    </InputContainer>
  );
};

export {FormInput};
