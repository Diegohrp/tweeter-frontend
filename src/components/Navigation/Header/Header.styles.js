import styled from 'styled-components';
import {titleFont} from '../../../styles/GlobalStyles';
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.cards};
  width: 100%;
  height: 68.3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  z-index: 20;
  img {
    height: 31.5px;
  }
  nav {
    display: none;
  }
  @media (min-width: 700px) {
    nav {
      width: 345px;
      height: 100%;
      display: flex;
      justify-content: center;

      ul {
        width: 330px;
        display: flex;
        justify-content: space-between;
        display: flex;
        list-style: none;
        font-family: ${titleFont};
        font-size: 1.4rem;
        font-weight: 500;

        a {
          width: 80px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
        }
      }
    }
  }
`;

const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  button {
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 11px;
    cursor: pointer;
  }
  figure {
    display: none;
  }
  button.mobile {
    width: 40px;
    height: 40px;
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      margin-right: 12px;
    }
  }
  button.desktop {
    display: none;
  }

  p {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 11px;
    color: ${(props) => props.theme.titlesColor};
  }

  @media (min-width: 700px) {
    button.mobile {
      display: none;
    }
    button.desktop {
      display: flex;
      width: 20px;
      height: 20px;
      font-size: 2rem;
      color: ${(props) => props.theme.titlesColor};
    }
    figure {
      display: block;
      margin-left: 11px;
    }
  }
`;

export {StyledHeader, ProfileSection};
