import styled from 'styled-components';
import {textFont} from '../../styles/GlobalStyles';

const SearchBar = styled.form`
  justify-self: center;
  width: 95%;
  height: 54px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.cards};
  color: ${(props) => props.theme.placeholderColor};
  input {
    width: 65%;
    font-size: 1.6rem;
    font-family: ${textFont};
    color: ${(props) => props.theme.primaryText};
    outline: none;
    border: none;
    &::placeholder {
      font-family: ${textFont};
      color: ${(props) => props.theme.placeholderColor};
    }
  }
  @media (min-width: 700px) {
    width: 75%;
    input {
      width: 80%;
    }
  }
`;

export {SearchBar};
