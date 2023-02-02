import styled from 'styled-components';
import {textFont} from '../../../styles/GlobalStyles';

const inputColor = (isValid, neutral, error, ok) => {
  if (isValid == null) return neutral;
  if (!isValid) return error;
  return ok;
};

const InputContainer = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid
    ${({isValid, theme}) =>
      inputColor(isValid, theme.borders, theme.errorColor, theme.brandColor)};
  svg {
    margin-left: 10px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.secondaryText};
  }

  input {
    height: 25px;
    width: 80%;
    outline: none;
    border: none;
    margin-left: 10px;
    font-family: ${textFont};

    font-weight: 500;
    &::placeholder {
      font-family: ${textFont};
      font-size: 1.3rem;
    }
  }
`;

export {StyledInput, InputContainer};
