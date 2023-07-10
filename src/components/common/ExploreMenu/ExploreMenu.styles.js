import styled from 'styled-components';
import {titleFont} from '../../../styles/GlobalStyles';

const Aside = styled.aside`
  width: 95%;
  display: grid;
  justify-self: center;
  margin-bottom: 20px;

  nav {
    height: 220px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    background-color: ${(props) => props.theme.cards};

    ul {
      height: 100%;
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      li a {
        width: 100%;
        display: flex;
        padding: 6px 20px;
        border-radius: 2px;
        font-size: 1.4rem;
        text-decoration: none;
        font-family: ${titleFont};
        color: ${(props) => props.theme.secondaryText};
        &:hover {
          color: ${(props) => props.theme.brandColor};
        }
      }
    }
  }
  @media (min-width: 700px) {
    width: 100%;
    justify-items: flex-end;
    nav {
      width: 100%;
      max-width: 300px;
      position: fixed;
    }
  }
`;

export {Aside};
