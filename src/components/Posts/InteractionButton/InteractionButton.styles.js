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
  color: ${(props) => {
    switch (props.interaction) {
      case 'Retweeted':
        return props.theme.retweetedColor;
      case 'Liked':
        return props.theme.likedColor;
      case 'Saved':
        return props.theme.savedColor;
      default:
        return props.theme.secondaryText;
    }
  }};
  &:hover {
    background-color: ${(props) => props.theme.background};
  }
  svg {
    font-size: 1.8rem;
  }
  span {
    display: none;
  }
  &:disabled {
    cursor: auto;
    background-color: transparent;
    color: ${(props) => props.theme.placeholderColor};
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
