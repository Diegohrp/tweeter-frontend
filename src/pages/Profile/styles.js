import styled from 'styled-components';
import {titleFont} from '../../styles/GlobalStyles';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ProfileContainer = styled.section`
  width: 100%;
  position: relative;
`;
const CoverImg = styled.figure`
  width: 100%;
  height: 300px;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
`;

const ProfileCard = styled.article`
  width: 80%;
  min-height: 247px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 20px;
  padding-top: 30px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.cards};
  position: absolute;
  bottom: -225px;
  left: 10%;
  z-index: 2;
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 175px 4fr 0.5fr;
    width: 80%;
    min-height: 163px;
    bottom: -125px;
    flex-direction: row;
    justify-items: flex-end;
    align-items: flex-start;
    padding-top: 20px;
  }
  @media (min-width: 1100px) {
    width: 68%;
    left: 16%;
  }

  figure {
    width: 160px;
    height: 160px;
    padding: 2px;
    position: absolute;
    top: -120px;
    left: calc(50% - 80px);
    background-color: white;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
    @media (min-width: 900px) {
      left: 15px;
      top: -60px;
    }
  }

  section {
    header {
      width: 100%;
      font-family: ${titleFont};
      h2 {
        text-align: center;
        font-size: 2.4rem;
      }
      section {
        display: flex;
        justify-content: center;
        margin: 0;
        p {
          font-size: 1.2rem;
          font-weight: bold;
          margin-right: 10px;
        }
        p::after {
          font-weight: 500;
          color: ${(props) => props.theme.secondaryText};
          margin-left: 3px;
        }
        p:first-child::after {
          content: 'Following';
        }
        p:nth-child(2)::after {
          content: 'Followers';
        }
      }
    }
    main {
      width: 100%;
      p {
        text-align: center;
        font-size: 1.8rem;
        color: ${(props) => props.theme.secondaryText};
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 96px;
      }
    }
    @media (min-width: 900px) {
      grid-column: 2;
      justify-self: start;
      text-align: left;
      header {
        h2 {
          text-align: left;
        }
        section {
          justify-content: flex-start;
        }
      }
      main {
        margin-top: 20px;
        p {
          text-align: left;
        }
      }
    }
  }
`;

export {CoverImg, Main, ProfileCard, ProfileContainer};
