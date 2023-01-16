import styled from 'styled-components';
import {textFont, titleFont} from '../../styles/GlobalStyles';

const FormContainer = styled.article`
  width: min(80%, 400px);
  height: 455px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.theme.cards};
  .title {
    width: 80%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img {
      width: 120px;
      margin-bottom: 5px;
    }
    h2 {
      font-family: ${titleFont};
      font-size: 1.8rem;
      margin-top: 10px;
    }
    span {
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
  }
  .fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;
    div {
      display: flex;
      align-items: center;
      height: 30px;
      width: 80%;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid ${(props) => props.theme.borders};

      svg {
        margin-left: 10px;
        font-size: 1.2rem;
        color: ${(props) => props.theme.secondaryText};
      }

      input {
        height: 25px;
        width: 80%;
        outline: none;
        border: none;
        margin-left: 10px;
        font-family: ${textFont};

        font-weight: 500;
        &::placeholder {
          font-family: ${textFont};
          font-size: 1.3rem;
        }
      }
    }
    button {
      width: 80%;
      height: 25px;
      outline: none;
      border: none;
      border-radius: 5px;
      color: #ffffff;
      cursor: pointer;
      font-family: ${textFont};
      background-color: ${(props) => props.theme.brandColor};
    }
  }
  .social-media {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 300;
    color: ${(props) => props.theme.secondaryText};
    ul {
      width: 80%;
      display: flex;
      justify-content: center;
      margin: 5px 0;
      li {
        list-style: none;
        button {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          font-size: 1.8rem;
          border-radius: 50%;
          background-color: transparent;
          cursor: pointer;
          border: 1px solid ${(props) => props.theme.secondaryText};
          color: ${(props) => props.theme.secondaryText};
        }
      }
    }
    span a {
      text-decoration: none;
      font-weight: 500;
      color: ${(props) => props.theme.brandColor};
    }
  }
`;

export {FormContainer};
