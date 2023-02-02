import styled from 'styled-components';
import {textFont} from '@styles/GlobalStyles';

const Button = styled.button`
  width: 20%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.primaryText};
  &:hover {
    background-color: ${(props) => props.theme.background};
  }
  svg {
    font-size: 1.8rem;
  }
  span {
    display: none;
  }
  @media (min-width: 700px) {
    span {
      display: block;
      margin-left: 12px;
      font-size: 1.4rem;
      font-family: ${textFont};
    }
  }
`;

export {Button};
