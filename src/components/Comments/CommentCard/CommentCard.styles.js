import styled from 'styled-components';
import {titleFont} from '../../../styles/GlobalStyles';

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
  span {
    margin-left: 5px;
  }
  button {
    width: auto;
    justify-content: flex-start;
    span {
      font-size: 1.2rem;
    }
    svg {
      font-size: 1.4rem;
    }
    &:hover {
      background-color: transparent;
    }
  }
`;

const ImgContent = styled.figure`
  margin-top: 15px;
  img {
    width: 50%;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export {CommentContainer, Content, Interactions, ImgContent};
