import styled from 'styled-components';
import {textFont} from '@styles/GlobalStyles';

const Card = styled.article`
  margin: 20px auto;
  width: min(95%, 745px);
  min-height: 155px;
  padding: 20px 20px 0 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.theme.cards};
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
  margin-top: 22px;
  margin-bottom: 19px;
  font-size: 1.6rem;
  color: ${(props) => props.theme.primaryText};
`;
const ImgContent = styled.figure`
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
  margin: 9px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid ${(props) => props.theme.borders};
  border-left: none;
  border-right: none;
`;
export {Card, Author, TextContent, ImgContent, Details, Buttons};
