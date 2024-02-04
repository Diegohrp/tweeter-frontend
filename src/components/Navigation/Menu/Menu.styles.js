import styled from 'styled-components';
import {textFont} from '../../../styles/GlobalStyles';

const MenuContainer = styled.article`
  width: 222px;
  position: absolute;
  top: 75px;
  right: 20px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.cards};
  z-index: 1;
  ul {
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 14px 15.27px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

    li {
      height: 39.15px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: 1.4rem;
        color: ${(props) => props.theme.primaryText};
      }
      svg {
        font-size: 2.3rem;
        margin: 0 11.67px;
      }

      button {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        outline: none;
        font-family: ${textFont};
        color: ${(props) => props.theme.errorColor};
        cursor: pointer;
      }
      &:hover {
        background-color: ${(props) => props.theme.background};
      }
    }
    li:last-child {
      display: flex;
      justify-content: center;
      a {
        p {
          margin-right: 5px;
          &::after {
            content: '@Diegohrp';
            color: ${(props) => props.theme.brandColor};
          }
        }
      }

      @media (min-width: 700px) {
        display: none;
      }
    }
    span {
      width: 100%;
      height: 1px;
      margin: 10px 0;
      background-color: ${(props) => props.theme.borders};
    }
  }
`;

export {MenuContainer};
