import styled from 'styled-components';
import {textFont} from '@styles/GlobalStyles';

const Card = styled.article`
  /* margin: 0px auto;
  width: min(95%, 745px); */
  width: 100%;
  min-height: 155px;
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
`;
const Author = styled.div`
  width: 100%;
  display: flex;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 17.5px;
    h2 {
      font-size: 1.6rem;
      color: ${(props) => props.theme.titlesColor};
    }
    span {
      font-size: 1.2rem;
      color: ${(props) => props.theme.placeholderColor};
    }
  }
`;
const TextContent = styled.p`
  margin-top: 15px;
  font-size: 1.6rem;
  color: ${(props) => props.theme.primaryText};
  a {
    text-decoration: none;
    color: ${(props) => props.theme.brandColor};
    margin-right: 5px;
  }
`;
const ImgContent = styled.figure`
  margin-top: 15px;
  img {
    width: 100%;
    border-radius: 8px;
    object-fit: contain;
  }
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  button {
    margin-left: 16px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: ${textFont};
    color: ${(props) => props.theme.placeholderColor};
    cursor: pointer;
  }
`;
const Buttons = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 9px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid ${(props) => props.theme.borders};
  border-left: none;
  border-right: none;
`;
export {Card, Author, TextContent, ImgContent, Details, Buttons};
