import styled from 'styled-components';
import {textFont, titleFont} from '../../../styles/GlobalStyles';

const CommentContainer = styled.article`
  width: 100%;
  display: flex;
  padding-top: 20px;
  background-color: ${(props) => props.theme.cards};
  & > div {
    width: 100%;
    padding-left: 10px;
  }
`;

const Content = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.comments};
  padding: 9px 15px;
  div {
    display: flex;
    align-items: center;
    a {
      font-weight: 500;
      text-decoration: none;
      font-family: ${titleFont};
      font-size: 1.4rem;
      color: ${(props) => props.theme.titlesColor};
    }
    span {
      font-size: 1.2rem;
      color: ${(props) => props.theme.secondaryText};
      margin-left: 10px;
    }
  }
  p {
    margin-top: 8px;
    text-align: left;
    font-size: 1.6rem;
    color: ${(props) => props.theme.primaryText};
  }
`;

const Interactions = styled.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondaryText};
  button {
    margin-right: 20px;
    display: flex;
    width: 40px;
    align-items: center;
    justify-content: space-between;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: ${textFont};
    color: ${(props) => props.theme.secondaryText};
    svg {
      font-size: 1.4rem;
    }
  }
`;

export {CommentContainer, Content, Interactions};
