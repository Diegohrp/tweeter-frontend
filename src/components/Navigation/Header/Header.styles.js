import styled from 'styled-components';
import {titleFont} from '../../../styles/GlobalStyles';
const StyledHeader = styled.header`
  position: sticky;
  background-color: ${(props) => props.theme.cards};
  width: 100%;
  height: 68.3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  z-index: 1;
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
  img {
    width: 36px;
    height: 36px;
    border-radius: 5px;
    display: none;
  }
  button.mobile {
    width: 36px;
    height: 36px;
    display: flex;
    img {
      display: block;
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
    img {
      display: block;
      margin-left: 11px;
    }
  }
`;

export {StyledHeader, ProfileSection};