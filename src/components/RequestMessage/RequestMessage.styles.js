import styled from 'styled-components';
import {titleFont} from '../../styles/GlobalStyles';
const StyledMessage = styled.article`
  width: min(80%, 300px);
  height: 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.theme.cards};
  button {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 5px;
    top: 5px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    svg {
      font-size: 2.8rem;
      color: ${(props) => props.theme.errorColor};
    }
  }
  svg {
    font-size: 7rem;
    color: ${({theme, type}) =>
      type === 'error' ? theme.errorColor : theme.successColor};
  }
  p {
    font-size: 1.8rem;
    font-family: ${titleFont};
    text-align: center;
  }
`;

export {StyledMessage};
