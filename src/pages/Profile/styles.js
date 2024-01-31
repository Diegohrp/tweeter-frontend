import styled from 'styled-components';
import {titleFont} from '../../styles/GlobalStyles';

const Main = styled.main`
  width: 100%;
  height: calc(100vh - 68.3px - 68.3px);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px 1fr 300px;
  gap: 20px;

  aside {
    margin-top: 230px;
  }

  section:last-child {
    grid-row: 3;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 400px 2fr;
    height: calc(100vh);

    align-items: flex-start;
    section:first-child {
      grid-column: 1 / 3;
    }
    aside {
      grid-row: 2 / 4;
      height: 100%;
      margin-top: 0px;
      position: relative;

      nav {
        position: absolute;
        top: 20px;
        left: 21%;
      }
    }
    .list {
      width: 87%;
      align-items: center;
    }
  }
`;

const ProfileCover = styled.section`
  width: 100%;
  position: relative;
  grid-row: 1;
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
  width: 95%;
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
  left: 2.5%;
  z-index: 2;
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 175px 4fr 0.5fr;
    width: 90%;
    left: 5%;
    min-height: 163px;
    bottom: -125px;
    flex-direction: row;
    justify-items: flex-end;
    align-items: flex-start;
    padding-top: 20px;
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
    @media (min-width: 700px) {
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
    @media (min-width: 700px) {
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

export {CoverImg, Main, ProfileCard, ProfileCover};
