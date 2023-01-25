import styled from 'styled-components';
import {textFont, titleFont} from '../../styles/GlobalStyles';

const MenuContainer = styled.article`
  position: absolute;
  left: calc(15% - 10px);
  top: calc(100% + 8px);
  width: min(100%, 234px);
  height: 155px;
  background-color: ${(props) => props.theme.cards};
  padding: 9px 12px;
  border-radius: 12px;
  div {
    font-size: 1.2rem;
    margin-bottom: 15px;
    h2 {
      color: ${(props) => props.theme.primaryText};
      font-family: ${titleFont};
    }
    p {
      color: ${(props) => props.theme.secondaryText};
      font-weight: 300;
    }
  }
  ul {
    list-style: none;
    width: 100%;
    li {
      button {
        width: 100%;
        height: 39px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        font-family: ${textFont};
        font-size: 1.3rem;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color: ${(props) => props.theme.primaryText};
        &:hover {
          background-color: ${(props) => props.theme.background};
        }
        svg {
          margin: 0 9px 0 13px;
          font-size: 2rem;
          color: ${(props) => props.theme.titlesColor};
        }
      }
    }
  }
`;

export {MenuContainer};
